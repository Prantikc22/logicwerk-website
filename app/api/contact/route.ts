import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { firstName, lastName, email, company, phone, subject, message, budget, timeline } = body

    // Create email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company || "Not provided"}
      Phone: ${phone || "Not provided"}
      Subject: ${subject}
      Budget: ${budget || "Not specified"}
      Timeline: ${timeline || "Not specified"}
      
      Message:
      ${message}
    `

    // In a real application, you would send this email using a service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    // - Resend

    // For now, we'll simulate the email sending
    console.log("Contact Form Email Content:", emailContent)
    console.log("Sending to: prantikchatterjee22@gmail.com")

    // Here you would implement actual email sending logic
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'prantikchatterjee22@gmail.com',
      subject: `New Contact Form: ${subject}`,
      text: emailContent,
      replyTo: email
    })
    */

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
