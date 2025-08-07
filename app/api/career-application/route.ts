import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const fullName = formData.get("fullName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const experience = formData.get("experience") as string
    const coverLetter = formData.get("coverLetter") as string
    const resume = formData.get("resume") as File

    // Create email content
    const emailContent = `
      New Career Application Received
      
      Position: ${position}
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Experience: ${experience}
      
      Cover Letter:
      ${coverLetter}
      
      Resume: ${resume ? resume.name : "No resume attached"}
    `

    // In a real application, you would send this email using a service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    // - Resend

    // For now, we'll simulate the email sending
    console.log("Career Application Email Content:", emailContent)
    console.log("Sending to: prantikchatterjee22@gmail.com")

    // Here you would implement actual email sending logic
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'prantikchatterjee22@gmail.com',
      subject: `New Career Application: ${position}`,
      text: emailContent,
      attachments: resume ? [{ filename: resume.name, content: await resume.arrayBuffer() }] : []
    })
    */

    return NextResponse.json({ success: true, message: "Application submitted successfully" })
  } catch (error) {
    console.error("Error processing career application:", error)
    return NextResponse.json({ success: false, message: "Failed to submit application" }, { status: 500 })
  }
}
