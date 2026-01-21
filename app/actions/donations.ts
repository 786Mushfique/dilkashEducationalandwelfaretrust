// "use server"
// import { stripe } from "@/lib/stripe"
// import { DONATIONS } from "@/lib/donations"

// const MAX_DONATION_PKR = 27900000 // Approximately $99,999.99 USD (Stripe max is $999,999.99)
// const MIN_DONATION_PKR = 100

// export async function createDonationCheckout(
//   donationId: string,
//   amountInPkr: number,
//   donorName: string,
//   donorEmail: string,
// ) {
//   const donation = DONATIONS.find((d) => d.id === donationId)
//   if (!donation) {
//     throw new Error(`Donation type with id "${donationId}" not found`)
//   }

//   if (amountInPkr < MIN_DONATION_PKR) {
//     throw new Error(`Minimum donation amount is PKR ${MIN_DONATION_PKR}`)
//   }

//   if (amountInPkr > MAX_DONATION_PKR) {
//     throw new Error(`Maximum donation amount is PKR ${MAX_DONATION_PKR}. Please contact us for larger donations.`)
//   }

//   // Convert PKR to USD (approximate: 1 USD = 280 PKR)
//   const amountInCents = Math.round((amountInPkr / 280) * 100)

//   // Create Checkout Session
//   const session = await stripe.checkout.sessions.create({
//     ui_mode: "embedded",
//     redirect_on_completion: "never",
//     customer_email: donorEmail,
//     line_items: [
//       {
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: donation.name,
//             description: `${donation.description_en} - PKR ${amountInPkr}`,
//           },
//           unit_amount: amountInCents,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     metadata: {
//       donorName,
//       donorEmail,
//       donationType: donation.id,
//       amountInPkr: amountInPkr.toString(),
//     },
//   })

//   return session.client_secret
// }

// export async function checkPaymentStatus(clientSecret: string) {
//   const sessionId = clientSecret.split("_secret_")[0]

//   if (!sessionId) {
//     throw new Error("Invalid client secret format")
//   }

//   const session = await stripe.checkout.sessions.retrieve(sessionId)

//   if (session.payment_status === "paid") {
//     return {
//       paid: true,
//       sessionId: session.id,
//       amount: session.amount_total ? session.amount_total / 100 : 0,
//       metadata: session.metadata,
//     }
//   }

//   return { paid: false }
// }

"use server"
import { stripe } from "@/lib/stripe"
import { DONATIONS } from "@/lib/donations"
import { sendPaymentEmailNotification, sendAdminEmailNotification, sendAdminSMSNotification } from "@/lib/notifications"

const MAX_DONATION_PKR = 27900000 // Approximately $99,999.99 USD (Stripe max is $999,999.99)
const MIN_DONATION_PKR = 100

export async function createDonationCheckout(
  donationId: string,
  amountInPkr: number,
  donorName: string,
  donorEmail: string,
) {
  const donation = DONATIONS.find((d) => d.id === donationId)
  if (!donation) {
    throw new Error(`Donation type with id "${donationId}" not found`)
  }

  if (amountInPkr < MIN_DONATION_PKR) {
    throw new Error(`Minimum donation amount is PKR ${MIN_DONATION_PKR}`)
  }

  if (amountInPkr > MAX_DONATION_PKR) {
    throw new Error(`Maximum donation amount is PKR ${MAX_DONATION_PKR}. Please contact us for larger donations.`)
  }

  // Convert PKR to USD (approximate: 1 USD = 280 PKR)
  const amountInCents = Math.round((amountInPkr / 280) * 100)

  // Create Checkout Session
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    customer_email: donorEmail,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: donation.name,
            description: `${donation.description_en} - PKR ${amountInPkr}`,
          },
          unit_amount: amountInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    metadata: {
      donorName,
      donorEmail,
      donationType: donation.id,
      amountInPkr: amountInPkr.toString(),
    },
  })

  return session.client_secret
}

export async function checkPaymentStatus(clientSecret: string) {
  const sessionId = clientSecret.split("_secret_")[0]

  if (!sessionId) {
    throw new Error("Invalid client secret format")
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId)

  if (session.payment_status === "paid") {
    try {
      const metadata = session.metadata
      const amountInPkr = Number.parseInt(metadata?.amountInPkr || "0")
      const donationType = metadata?.donationType || "Donation"
      const donorName = metadata?.donorName || "Donor"
      const donorEmail = metadata?.donorEmail || ""

      // Send email to donor
      await sendPaymentEmailNotification(donorEmail, donorName, amountInPkr, donationType, session.id)

      // Send email to admin
      await sendAdminEmailNotification(donorName, donorEmail, amountInPkr, donationType, "Stripe", session.id)

      await sendAdminSMSNotification(donorName, amountInPkr, donationType, session.id)

      console.log("[v0] Notifications sent successfully")
    } catch (notificationError) {
      console.error("[v0] Notification error:", notificationError)
      // Don't throw - payment was successful even if notification fails
    }

    return {
      paid: true,
      sessionId: session.id,
      amount: session.amount_total ? session.amount_total / 100 : 0,
      metadata: session.metadata,
    }
  }

  return { paid: false }
}

export async function confirmBankPayment(
  donorName: string,
  donorEmail: string,
  amount: number,
  phoneNumber: string,
  paymentMethod: "bank" | "qr",
  transactionReference: string,
) {
  try {
    // Send email to donor
    await sendPaymentEmailNotification(
      donorEmail,
      donorName,
      amount,
      paymentMethod === "bank" ? "Bank Transfer" : "QR Code Payment",
      transactionReference,
    )

    // Send email to admin
    await sendAdminEmailNotification(
      donorName,
      donorEmail,
      amount,
      paymentMethod === "bank" ? "Bank Transfer" : "QR Code Payment",
      paymentMethod,
      transactionReference,
    )

    return { success: true, message: "Payment confirmed and notifications sent" }
  } catch (error) {
    console.error("[v0] Error confirming bank payment:", error)
    throw error
  }
}
