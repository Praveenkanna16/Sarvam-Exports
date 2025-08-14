Sarvam Exports - A B2B Digital Showroom

I built this project to create a modern, elegant, and highly interactive web presence for a home textile export company. The goal wasn't just to build another e-commerce site, but a proper B2B digital showroom designed to impress international clients and generate business inquiries.

The entire experience is crafted to feel high-end and unique, from the "stitching machine" loading animation to the immersive, full-screen product carousel.

Live Demo: (https://sarvam-exports.vercel.app/)

✨ Key Features
Public Showroom:
Creative Preloader: A unique "stitching machine" animation that draws the brand name on first load.

Unfolding Fabric Hero: An artistic "unfolding fabric" animation on the homepage to reveal the main headline.

Immersive Product Carousel: A full-screen, interactive carousel to showcase products one by one, with a blurred background that matches the current product image.

Interactive Contact Form: A guided, multi-step inquiry form that feels like a conversation.

Fully Responsive Design: Looks beautiful on all devices, from mobile phones to desktops.

Secure Admin Dashboard:
Full Product Management (CRUD): A secure panel for admins to create, read, update, and delete products.

Image Uploads: Seamlessly uploads product images to the cloud using Cloudinary.

Inquiry Management: A dashboard to view and manage all incoming business inquiries from clients.

Protected Routes: Uses JWT (JSON Web Tokens) to ensure only authorized admins can access the dashboard.

🛠️ Tech Stack
This project is a full-stack MERN application, built with a modern and scalable architecture.

Frontend: React, React Router, Redux Toolkit

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Image Hosting: Cloudinary for cloud-based image storage and management.

Authentication: JWT (JSON Web Tokens) & bcryptjs

🚀 Getting Started Locally
Want to run this on your own machine? Here’s how:

1. Backend Setup (sarvam-exports-server)
Navigate into the sarvam-exports-server directory.

Run npm install to install dependencies.

Create a .env file in the root of the server folder and add your secret keys for MONGO_URI, JWT_SECRET, and your Cloudinary credentials.

Run npm run dev to start the backend server on http://localhost:5001.

2. Frontend Setup (sarvam-exports-client)
Navigate into the sarvam-exports-client directory.

Run npm install to install dependencies.

Make sure the backend server is running.

Run npm start to launch the frontend on http://localhost:3000.

Deployed link : https://sarvam-exports.onrender.com
