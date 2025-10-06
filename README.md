# Work Items Tracker (Backend)

This is the backend API for the Work Items Tracker — a simple and efficient task management system.
It provides RESTful endpoints for creating, fetching, and managing user work items.
Each user is uniquely identified using their browser fingerprint (via FingerprintJS from the frontend).

## API Live URL: https://work-items-tracker.vercel.app

## Features

- User identification via FingerprintJS ID (no login required)

- CRUD operations for work items

- MongoDB with Mongoose for persistence

- Express.js REST API

- CORS enabled for frontend communication

- Clean, modular code structure

## Tech Stack

- Node.js

- Express.js

- MongoDB

- Mongoose

- dotenv

- CORS

## Project Structure

backend/
├── models/
│ └── workItemModel.js # Mongoose schema for work items
│
├── routes/
│ └── workItemRoutes.js # All API routes
│
├── controllers/
│ └── workItemController.js # Business logic for CRUD operations
│
├── server.js # Main entry point
└── .env.example # Environment variable example

## Setup Instructions

1. Clone the Repository
   git clone https://github.com/yourusername/work-items-backend.git
   cd work-items-backend

2. Install Dependencies
   npm install

3. Set Up Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/workitems

(Optional)

NODE_ENV=development

4. Run the Server
   npm run dev

Server will start on:

http://localhost:4000
