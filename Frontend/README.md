# Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Node.js backend for contact form functionality.

## Features

- **Responsive Design**: Optimized for all devices
- **Animated Landing Page**: Beautiful animations and transitions
- **Functional Contact Form**: Backend integration with email notifications
- **Modern UI**: Clean, professional design with smooth interactions
- **MERN Stack Showcase**: Highlights expertise in MongoDB, Express, React, Node.js

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for development and building

### Backend
- Node.js with Express
- Nodemailer for email functionality
- CORS for cross-origin requests
- Environment variables for configuration

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` file with your email credentials:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3001
```

### Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in your `.env` file

### Running the Application

1. Start the backend server:
```bash
npm run server
```

2. In a new terminal, start the frontend:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:3001`.

## Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Backend (Heroku/Railway/DigitalOcean)
1. Deploy the server folder to your hosting platform
2. Set environment variables in your hosting platform
3. Update the API endpoint in the Contact component

## Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name and introduction
- `src/components/About.tsx` - Skills and experience
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact information
- `index.html` - Page title and meta description

### Styling
- Colors: Modify Tailwind classes throughout components
- Animations: Customize in `src/index.css`
- Layout: Adjust component structures as needed

## Contact Form Features

- **Real-time Validation**: Client-side form validation
- **Email Notifications**: Receive inquiries directly in your inbox
- **Auto-reply**: Automatic confirmation email to sender
- **Error Handling**: Comprehensive error handling and user feedback
- **Responsive Design**: Works perfectly on all devices

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with setup, feel free to reach out!