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
-> Landing/welcome page - Login.jsx
-> User login component - Signup.jsx
-> User registration component - Profile.jsx
-> User profile component - Chat.jsx
-> CometChat messaging page /CometChat - context/ - styles/ - utils/ App.jsx


## Technologies Used

- **React**: JavaScript library for building the user interface  
- **React Router Dom**: For client-side routing between pages  
- **Tailwind CSS**: For styling and responsive design  
- **CometChat**: Real-time chat and presence features

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Mayank-pandey-ji/popx-app.git
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


## Challenges Faced 🚧

While building this project and integrating CometChat, I encountered multiple real-world challenges that helped me grow as a developer:

- 🔄 **TypeScript to JavaScript Conversion**: The official CometChat code examples were provided in TypeScript, whereas my project was built using JavaScript. I had to manually convert the code, making sure it worked without type errors. This included handling objects like `CometChat.User` and messages like `CometChat.TextMessage`, and ensuring everything ran smoothly in a JS environment.

- 🧩 **Fixing CSS Issues in CometChat Package**: Some of the CSS files from CometChat's package had extra semicolons and syntax issues that were causing styling problems in my app. I manually edited those files and cleaned up the CSS to maintain consistent UI behavior across components.

- 🧱 **Refactoring App-Level Code into Reusable Components**: The example provided by CometChat was written to be directly used inside `App.jsx`. But in my case, I wanted to keep the structure clean and modular, so I refactored the logic into a separate component. This required careful handling of state, hooks, and lifecycle methods to ensure the CometChat functionality worked properly as an independent component.

Each challenge gave me a deeper understanding of real-world development and sharpened my problem-solving skills.


## Feedback on CometChat 💬

Overall, integrating CometChat into my project was a great experience. Here are some points of feedback based on my hands-on usage:

### 👍 What I liked:
- ✅ **Powerful SDK & UI Kit**: The SDK provides a complete real-time chat solution out-of-the-box, and the pre-built UI Kit made integration super fast.
- ✅ **Feature-Rich**: Includes text, media messages, presence indicators, user lists, groups, and more — all ready to use.
- ✅ **Responsive Support & Documentation**: The docs were detailed, and I was able to find most of the answers I needed through their support resources.

### 🔧 What can be improved:
- 🛠️ **TypeScript-first Examples**: Many code snippets are TypeScript-based, which can be slightly inconvenient for JavaScript projects. A dual approach in docs would be more beginner-friendly.
- 🛠️ **Minor CSS Issues**: Some default CSS files in the UI Kit had extra semicolons and minor styling bugs that required manual cleanup.
- 🛠️ **Component-Level Integration Examples**: Most examples are written inside `App.jsx`. It would be helpful to have modular, component-level examples for better real-world usage and maintainability.

Despite these minor issues, CometChat is a fantastic tool for adding real-time chat to any web app. I'm glad I got the chance to work with it!
