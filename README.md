# Gold Price Tracker

Gold Price Tracker is a full-stack web application that allows users to register, log in, and view the current price of gold in real time.  
The goal of this project is to demonstrate a clean frontend–backend architecture, secure authentication, and safe integration with a third-party API.

## What This Project Does

Allows users to create an account and log in
Uses JWT authentication to protect routes
Displays live gold price data on a protected dashboard
Fetches gold prices securely from GoldAPI via the backend
Keeps API keys hidden from the frontend
Uses a premium gold-themed UI for a better user experience

## Tech Stack Used

### Frontend

React (Vite)
JavaScript
CSS (custom gold-themed design)

### Backend

Node.js
Express.js
JSON Web Tokens (JWT)

### External API

GoldAPI.io (accessed only from the backend)

### Backend Setup

cd backend
npm install

### Create a .env file inside the backend folder:

PORT=5000
JWT_SECRET=your_jwt_secret
GOLD_API_KEY=your_goldapi_key

I have also pushed a .env.example for refrence

### Start the backend server:

npm run dev

### The backend will run on:

http://localhost:5000

### Frontend Setup

cd frontend
npm install
npm run dev

### Frontend Setup
cd frontend
npm install
npm run dev