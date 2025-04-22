# PopX React Application

A clean and modern React application for user account management with responsive UI components, now integrated with **CometChat** for real-time messaging capabilities.

## Overview

PopX is a React application built with JavaScript and Tailwind CSS that provides user authentication, profile management, and now also includes **real-time chat functionality** via CometChat.

The application features clean, modern UI components with a focus on user experience.

## Pages

The application consists of five main pages:

1. **Landing Page**: The entry point that introduces users to the application  
2. **Login Page**: Allows existing users to log into their accounts  
3. **Signup Page**: Enables new users to create an account with required details  
4. **Profile Page**: Shows user information and account settings after authentication  
5. **Chat Page**: Enables real-time messaging powered by CometChat

## Features

- User registration with comprehensive form fields  
- User authentication system  
- Profile management  
- Real-time 1-on-1 chat using CometChat  
- Responsive design that works across devices  
- Modern UI with floating labels and clean aesthetics  
- Client-side routing with React Router Dom

## CometChat Integration

- Implemented CometChat SDK to enable messaging functionality  
- Used **CometChat UIKit** for faster and customizable integration  
- Automatically logs in the user to CometChat after authentication  
- Chat UI includes message list, typing indicators, and user presence

## Project Structure\

/src /pages - Landing.jsx
# Landing/welcome page - Login.jsx
# User login component - Signup.jsx
# User registration component - Profile.jsx
# User profile component - Chat.jsx
# CometChat messaging page /CometChat - context/ - styles/ - utils/ App.jsx


## Technologies Used

- **React**: JavaScript library for building the user interface  
- **React Router Dom**: For client-side routing between pages  
- **Tailwind CSS**: For styling and responsive design  
- **CometChat**: Real-time chat and presence features

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/popx-app.git
cd popx-app
npm install
npm start
```

## Usage
Navigate through the application using the following flow:

Landing page introduces the app and provides login/signup options

New users can create an account via the signup page

Existing users can log in via the login page

After authentication, users are directed to their profile page

Users can access the Chat page for real-time messaging

## Design Elements
Color Scheme: Purple accent colors for branding consistency

Floating Labels: Modern form design with labels overlapping input borders

Dotted Borders: Used in profile view for visual distinction

Responsive Layout: Adapts to different screen sizes
