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

## Setup Instructions

1. Clone the Repository
   git clone https://github.com/MrCandie/heunets-backend
   cd heunets-backend

2. Install Dependencies
   npm install

3. Set Up Environment Variables

Create a .env file in the root directory:

PORT=4000

(Optional)

NODE_ENV=development

4. Run the Server
   npm run dev

Server will start on:

http://localhost:4000
