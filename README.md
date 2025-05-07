ProofVault
ProofVault is a secure Web3-enabled document vault application that allows users to log in using Civic 
Auth and manage their personal documents. It provides a privacy-focused alternative to traditional cloud 
storage systems like Google Drive by leveraging decentralized identity and optional decentralized file storage technologies.

Overview
ProofVault enables users to authenticate using Civic’s embedded wallet system without the need
for traditional passwords. Once logged in, users can upload, view, download, and delete documents through a clean, intuitive interface.

This project was developed as a submission for the Civic Auth Bounty program, with a focus on usability, privacy, and Web3 integration.

Features
Civic Authentication
Seamless login using Civic Auth, creating an embedded wallet for each user.

User Document Management
Users can upload important documents (e.g., certificates, IDs), view, delete, or download them anytime.

Decentralized Identity
No centralized accounts or passwords. User identity is tied to their wallet address.

Optional IPFS Support
Documents can optionally be uploaded to IPFS to ensure decentralized storage.

Responsive UI
Modern and minimal interface for both desktop and mobile experiences.

Technologies Used
Frontend
React.js (Vite)

Tailwind CSS

Axios

@civic/auth-web3 (Civic Auth SDK)

React Router DOM

Backend
Node.js

Express.js

MongoDB (via Mongoose)

Multer (for file uploads)

Cors, dotenv

Storage
Local Storage or IPFS (via configuration)

How It Works
1. Authentication
Users initiate login with Civic Auth.

A Civic wallet is embedded and used to authenticate the user.

Upon successful login, the user is redirected to the dashboard.

2. Document Management
Users can upload PDF or image documents.

Files are stored securely and linked to the user's wallet address.

Users can view or delete documents from their dashboard.

3. (Optional) IPFS Integration
Files can be stored on IPFS to enhance data ownership and decentralization.

Project Structure
bash
Copy
Edit
/proofvault
│
├── /client         # React frontend (deployed via Vercel)
│   ├── /pages
│   ├── /components
│   ├── App.jsx
│   └── main.jsx
│
├── /server         # Express backend (deployed via Render)
│   ├── /routes
│   ├── /controllers
│   ├── /models
│   ├── server.js
│   └── .env
Setup & Deployment
1. Frontend (Vite + Vercel)
bash
Copy
Edit
cd client
npm install
npm run dev
Create a .env file:

env
Copy
Edit
VITE_API_URL=https://your-backend-url.onrender.com/api
Deploy to Vercel, selecting the client folder as the root.

2. Backend (Express + Render)
bash
Copy
Edit
cd server
npm install
npm run start
Create a .env file:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection
Deploy to Render, selecting the server folder as root and setting the following environment variables:

PORT

MONGO_URI

Civic Integration
This project uses the @civic/auth-web3 SDK to enable passwordless login with embedded wallets. The Civic Auth flow is initialized on the login page and handled automatically via the SDK.

Key benefits:

Simplified sign-in flow.

Wallet-based identity.

Fully Web3-native authentication.

Demo Video
A 1–2 minute demo video demonstrates:

Civic Auth login flow

Uploading and managing documents

Overview of technology and benefits

Link to demo video – https://www.loom.com/share/6f9f2872d6d84e79a195317c1784c76a?sid=71a18f82-18b5-4b7d-8138-2590c90ed98f
