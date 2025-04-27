# Project Structure

├── src/ # Source code directory
│ ├── assets/ # Static assets (images, icons, etc.)
│ ├── components/ # Reusable React components
│ │ └── core/ # Core components
│ │ └── Homepage/ # Homepage specific components
│ ├── data/ # Data files and constants
│ ├── pages/ # Page components
│ ├── services/ # API services and utilities
│ ├── App.jsx # Main application component
│ ├── main.jsx # Application entry point
│ └── index.css # Global styles
│
├── backend/ # Backend server code
├── public/ # Public static files
├── dist/ # Production build output
│
├── package.json # Project dependencies and scripts
├── vite.config.js # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
└── index.html # HTML entry point

# Project Overview: EZ Works

This is a modern web application that serves as a platform for business services, featuring a sophisticated contact form system with email notifications and data storage capabilities.

## Core Features

### 1. Contact Form System

The application features a comprehensive contact form that:

- Collects user information (name, email, phone number)
- Allows service selection from multiple options
- Includes a country code selector with flag display
- Provides a message field for additional details
- Offers an opt-in for promotional emails

### 2. Data Storage

The system stores contact information in a MongoDB database with the following features:

- Unique email validation to prevent duplicates
- Updates existing contact information if the email already exists
- Stores:
  - Basic contact details (name, email, phone)
  - Country code
  - Selected services
  - Optional message
  - Marketing preferences

### 3. Email Notification System

When a user submits the contact form:

- An automated confirmation email is sent to the user
- The email includes:
  - A professional HTML template
  - Company branding
  - Confirmation message
  - Response time commitment (10 minutes)
  - Company contact information
  - Social media links

### 4. Technical Implementation

The project uses a modern tech stack:

**Frontend:**

- React for the user interface
- React Hook Form for form handling
- Tailwind CSS for styling
- React Hot Toast for notifications
- Swiper for carousel components

**Backend:**

- Node.js with Express
- MongoDB for data storage
- Nodemailer for email functionality
- CORS for cross-origin requests
- Environment variables for configuration

### 5. User Experience Features

- Responsive design that works on all devices
- Real-time form validation
- Loading states during submission
- Success/error notifications
- Interactive country code selector with flags
- Service selection with multi-select capability
- Clean, modern UI with smooth animations

### 6. Security and Validation

- Form validation on both frontend and backend
- Input sanitization
- Secure email configuration
- Environment variable protection
- CORS protection
- Error handling and logging

## How It Works

1. **User Interaction:**

   - User fills out the contact form
   - Form validates input in real-time
   - User selects services and country code
   - Optional message can be added
   - User submits the form

2. **Data Processing:**

   - Frontend sends data to backend API
   - Backend validates and processes the data
   - System checks for existing contact
   - Data is stored/updated in MongoDB

3. **Communication:**

   - Automated email is sent to user
   - System confirms successful submission
   - User receives confirmation email
   - Admin team is notified of new contact

4. **Error Handling:**
   - Frontend shows validation errors
   - Backend handles API errors
   - Email sending failures are caught
   - User is notified of any issues

This system provides a professional, efficient way for potential clients to contact the business while maintaining data integrity and ensuring proper communication flow.
