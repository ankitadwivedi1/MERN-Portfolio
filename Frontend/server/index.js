import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Email to you (notification)
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.EMAIL_USER || 'your-email@gmail.com',
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `
    };

    // Auto-reply to sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your message. I've received your inquiry and will get back to you within 24-48 hours.</p>
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="font-style: italic;">"${message}"</p>
          </div>
          <p>Best regards,<br>
          <strong>Full Stack Developer</strong></p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});