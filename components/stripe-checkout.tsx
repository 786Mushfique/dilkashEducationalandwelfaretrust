// "use client"

// import { useState, useEffect } from "react"
// import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
// import { loadStripe } from "@stripe/stripe-js"
// import { createDonationCheckout } from "@/app/actions/donations"

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// )


// interface StripeCheckoutProps {
//   donationId: string
//   amountInPkr: number
//   donorName: string
//   donorEmail: string
//   onPaymentSuccess: (clientSecret: string) => void
// }

// export default function StripeCheckout({
//   donationId,
//   amountInPkr,
//   donorName,
//   donorEmail,
//   onPaymentSuccess,
// }: StripeCheckoutProps) {
//   const [clientSecret, setClientSecret] = useState<string>("")
//   const [error, setError] = useState<string>("")
//   const [loading, setLoading] = useState(true)
//   const [checkoutStarted, setCheckoutStarted] = useState(false)

//   useEffect(() => {
//     const startCheckout = async () => {
//       if (checkoutStarted) return

//       try {
//         setCheckoutStarted(true)
//         console.log("[v0] Starting checkout with:", { donationId, amountInPkr, donorName, donorEmail })
//         const secret = await createDonationCheckout(donationId, amountInPkr, donorName, donorEmail)
//         console.log("[v0] Got client secret:", secret)
//         setClientSecret(secret)
//         setLoading(false)
//       } catch (err) {
//         console.error("[v0] Checkout error:", err)
//         setError(err instanceof Error ? err.message : "Failed to start checkout")
//         setLoading(false)
//       }
//     }

//     startCheckout()
//   }, [donationId, amountInPkr, donorName, donorEmail, checkoutStarted])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const params = new URLSearchParams(window.location.search)
//       if (params.get("payment_status") === "success" && clientSecret) {
//         console.log("[v0] Payment successful detected")
//         onPaymentSuccess(clientSecret)
//         clearInterval(interval)
//       }
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [clientSecret, onPaymentSuccess])

//   if (loading) {
//     return (
//       <div className="w-full py-8 text-center">
//         <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mb-4"></div>
//         <p className="text-gray-600">Loading payment form...</p>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
//         <p className="text-red-700 font-semibold mb-2">Error:</p>
//         <p className="text-red-600">{error}</p>
//       </div>
//     )
//   }

//   if (!clientSecret) {
//     return (
//       <div className="w-full py-8 text-center">
//         <p className="text-gray-600">Initializing payment...</p>
//       </div>
//     )
//   }

//   return (
//     <div id="checkout" className="w-full">
//       <EmbeddedCheckoutProvider
//         stripe={stripePromise}
//         options={{
//           clientSecret,
//           onComplete: () => {
//             console.log("[v0] Checkout completed")
//             onPaymentSuccess(clientSecret)
//           },
//         }}
//       >
//         <EmbeddedCheckout />
//       </EmbeddedCheckoutProvider>
//     </div>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { createDonationCheckout } from "@/app/actions/donations"

// Load Stripe with PUBLIC key (client-side only)
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

interface StripeCheckoutProps {
  donationId: string
  amountInPkr: number
  donorName: string
  donorEmail: string
  onPaymentSuccess: (clientSecret: string) => void
}

export default function StripeCheckout({
  donationId,
  amountInPkr,
  donorName,
  donorEmail,
  onPaymentSuccess,
}: StripeCheckoutProps) {
  const [clientSecret, setClientSecret] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [checkoutStarted, setCheckoutStarted] = useState<boolean>(false)

  // Start Stripe checkout
  useEffect(() => {
    const startCheckout = async () => {
      if (checkoutStarted) return

      try {
        setCheckoutStarted(true)

        const secret = await createDonationCheckout(
          donationId,
          amountInPkr,
          donorName,
          donorEmail
        )

        // ✅ TYPE-SAFE FIX
        if (!secret) {
          throw new Error("Stripe client secret not returned")
        }

        setClientSecret(secret)
      } catch (err) {
        console.error("Stripe checkout error:", err)
        setError(
          err instanceof Error ? err.message : "Failed to start payment"
        )
      } finally {
        setLoading(false)
      }
    }

    startCheckout()
  }, [donationId, amountInPkr, donorName, donorEmail, checkoutStarted])

  // Loading UI
  if (loading) {
    return (
      <div className="w-full py-8 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-emerald-600 mb-4" />
        <p className="text-gray-600">Loading payment form…</p>
      </div>
    )
  }

  // Error UI
  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="font-semibold text-red-700">Payment Error</p>
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  // Safety check
  if (!clientSecret) {
    return (
      <div className="w-full py-8 text-center">
        <p className="text-gray-600">Initializing payment…</p>
      </div>
    )
  }

  // Stripe Embedded Checkout
  return (
    <div id="checkout" className="w-full">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          clientSecret,
          onComplete: () => {
            onPaymentSuccess(clientSecret)
          },
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
