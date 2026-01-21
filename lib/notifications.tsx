"use server"

import { Resend } from "resend"
import { DONATIONS } from "./donations"

const resend = new Resend(process.env.RESEND_API_KEY || "")

const accountSid = process.env.TWILIO_ACCOUNT_SID || ""
const authToken = process.env.TWILIO_AUTH_TOKEN || ""
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER || ""

function getDonationName(donationType: string): string {
  const donation = DONATIONS.find((d) => d.id === donationType)
  return donation ? donation.name : "Donation"
}

function formatAmount(amountInPkr: number): string {
  return `PKR ${amountInPkr.toLocaleString("en-PK")}`
}

function formatDate(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

async function sendTwilioSMS(toNumber: string, message: string): Promise<void> {
  if (!accountSid || !authToken || !twilioPhoneNumber) {
    console.log("[v0] Twilio credentials not configured - skipping SMS")
    return
  }

  const auth = Buffer.from(`${accountSid}:${authToken}`).toString("base64")

  try {
    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: twilioPhoneNumber,
        To: toNumber,
        Body: message,
      }).toString(),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("[v0] Twilio SMS API error:", error)
      return
    }

    console.log("[v0] SMS message sent to:", toNumber)
  } catch (error) {
    console.error("[v0] Error sending SMS via Twilio:", error)
  }
}

export async function sendPaymentEmailNotification(
  donorEmail: string,
  donorName: string,
  amountInPkr: number,
  donationType: string,
  transactionId: string,
): Promise<void> {
  if (!resend) return

  const donationName = getDonationName(donationType) || donationType

  try {
    await resend.emails.send({
      from: "Dilkash Educational Welfare and Trust <onboarding@resend.dev>",
      to: donorEmail,
      subject: `Payment Receipt - Dilkash Educational Welfare and Trust`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1a1a1a; margin: 0;">Dilkash Educational Welfare and Trust</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Payment Receipt</p>
          </div>

          <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 15px 0;"><strong>Dear ${donorName},</strong></p>
            <p style="margin: 0 0 15px 0; color: #666;">Thank you for your generous donation to Dilkash Educational Welfare and Trust. Your contribution will help us continue our mission of providing quality education to underprivileged children.</p>
          </div>

          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #1a1a1a;">Receipt Details</h3>
            <table style="width: 100%; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #666;">Donation Type:</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right;">${donationName}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #666;">Amount:</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right;">${formatAmount(amountInPkr)}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #666;">Transaction ID:</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right; font-size: 12px;">${transactionId}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #666;">Date:</td>
                <td style="padding: 8px 0; font-weight: bold; text-align: right;">${formatDate()}</td>
              </tr>
            </table>
          </div>

          <div style="background: #f0f7ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0066cc; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 13px; color: #0066cc;">
              <strong>✓ Payment Confirmed</strong><br/>
              Your donation has been successfully received and processed.
            </p>
          </div>

          <div style="border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #999;">
            <p style="margin: 0 0 10px 0;">If you have any questions about your donation, please contact us at:</p>
            <p style="margin: 0;"><strong>Email:</strong> mushfiqueraj786@gmail.com</p>
            <p style="margin: 5px 0 0 0;"><strong>Phone:</strong> +92 XXX XXXXXXX</p>
          </div>
        </div>
      `,
    })

    console.log("[v0] Donor email sent successfully to:", donorEmail)
  } catch (error) {
    console.error("[v0] Error sending donor email:", error)
  }
}

export async function sendAdminEmailNotification(
  donorName: string,
  donorEmail: string,
  amountInPkr: number,
  donationType: string,
  paymentMethod: string,
  transactionId: string,
): Promise<void> {
  if (!resend) return

  const donationName = getDonationName(donationType) || donationType
  const adminEmail = process.env.ADMIN_EMAIL || "mushfiqueraj786@gmail.com"

  try {
    await resend.emails.send({
      from: "Dilkash Educational Welfare and Trust <onboarding@resend.dev>",
      to: adminEmail,
      subject: `New Donation Received - ${formatAmount(amountInPkr)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1a1a1a; margin: 0;">New Donation Alert</h1>
          </div>

          <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #4caf50;">
            <h2 style="margin: 0; color: #2e7d32; font-size: 24px;">${formatAmount(amountInPkr)}</h2>
            <p style="margin: 5px 0 0 0; color: #558b2f;">Payment Received Successfully</p>
          </div>

          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #1a1a1a;">Donation Details</h3>
            <table style="width: 100%; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 40%;">Donor Name:</td>
                <td style="padding: 8px 0; font-weight: bold;">${donorName}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #666;">Donor Email:</td>
                <td style="padding: 8px 0; font-weight: bold;">${donorEmail}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #666;">Donation Type:</td>
                <td style="padding: 8px 0; font-weight: bold;">${donationName}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #666;">Amount:</td>
                <td style="padding: 8px 0; font-weight: bold;">${formatAmount(amountInPkr)}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #666;">Payment Method:</td>
                <td style="padding: 8px 0; font-weight: bold;">${paymentMethod}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #666;">Transaction ID:</td>
                <td style="padding: 8px 0; font-weight: bold; font-size: 12px;">${transactionId}</td>
              </tr>
              <tr style="border-top: 1px solid #eee;">
                <td style="padding: 8px 0; color: #666;">Date & Time:</td>
                <td style="padding: 8px 0; font-weight: bold;">${formatDate()}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    })

    console.log("[v0] Admin notification email sent to:", adminEmail)
  } catch (error) {
    console.error("[v0] Error sending admin email:", error)
  }
}

export async function sendAdminSMSNotification(
  donorName: string,
  amountInPkr: number,
  donationType: string,
  transactionId: string,
): Promise<void> {
  const adminSMS = "+77829078822"
  const donationName = getDonationName(donationType) || donationType

  const message = `New Donation: ${donorName} donated ${formatAmount(amountInPkr)} (${donationName}). Transaction ID: ${transactionId}`

  await sendTwilioSMS(adminSMS, message)
}
