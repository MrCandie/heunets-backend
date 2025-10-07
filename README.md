# Work Items Tracker (Backend)

This is the backend API for the Work Items Tracker — a simple and efficient task management system.
It provides RESTful endpoints for creating, fetching, and managing user work items.
Each user is uniquely identified using their browser fingerprint (via FingerprintJS from the frontend).

## API Live URL: https://heunets-backend-9rh5.onrender.com

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

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MrCandie/heunets-backend
   cd heunets-backend

   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   ```bash
   PORT=4000
   DATABASE=

   ```

4. **Run the server**

   ```bash
   npm run dev

   ```

5. **Run test**

   ```bash
   npm test

   ```

6. **Run lint**

   ```bash
   npm run lint

   ```

# Docker Instructions

1. **Build Docker Image**

   ```bash
   docker build -t workitems-backend .

   ```

2. **Run Docker Container**

   ```bash
   docker run -p 4000:4000 workitems-backend

   ```

## Notes

- The Docker image installs dev dependencies to run tests.

- Tests and linting are executed as part of the Docker build process.

- Exposes port 4000 for API access.
