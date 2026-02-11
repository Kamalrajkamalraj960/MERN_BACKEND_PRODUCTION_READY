🟢 MERN Backend – Production Ready (Day 7 – Swagger + JWT)
📌 Project Overview

This project is a production-ready Node.js + Express backend built with:

MongoDB
JWT Authentication
Protected Routes
Swagger API Documentation
MVC Folder Structure
It demonstrates secure authentication and team-friendly API documentation using Swagger.

🚀 Features
✅ User Registration
✅ User Login (JWT Token Generation)
✅ Protected Task APIs
✅ JWT Middleware Authentication
✅ Swagger API Documentation
✅ Swagger JWT Authorization Support
✅ Clean MVC Architecture
🛠 Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
JWT (jsonwebtoken)
Swagger (swagger-jsdoc + swagger-ui-express)
Nodemon
dotenv
CORS

📁 Folder Structure
MERN_BACKEND_PRODUCTION_READY/
│
├── src/
│   ├── config/
│   │   └── swagger.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── task.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   └── task.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── task.routes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md

⚙️ Installation
1️⃣ Clone the repository
git clone <your-repo-url>
cd MERN_BACKEND_PRODUCTION_READY

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4️⃣ Run the server
npm run dev
Server will start on:
http://localhost:3000

🔐 Authentication Flow
🟢 Register
POST /api/auth/register
Creates a new user.

🟢 Login
POST /api/auth/login
Returns:

{
  "token": "JWT_TOKEN_HERE"
}

This token is required for protected routes.

🟢 Protected Route – Get Tasks
GET /api/tasks
Requires JWT token in header:
Authorization: Bearer <your_token>
📘 Swagger Documentation
Swagger UI is available at:
http://localhost:3000/api-docs
How to Use Swagger with JWT

Login via /api/auth/login
Copy the token
Click Authorize (top right)
Paste ONLY the token (not "Bearer")
Click Authorize
Test protected APIs


Swagger Success
![alt text](image.png)

Register Success
![alt text](image-1.png)

Login Success
![alt text](image-2.png)

JWT token Success
![alt text](image-3.png)

Authentication Success
![alt text](image-4.png)

MongoDB Compass Success 
![alt text](image-5.png)

Server Connect Success
![alt text](image-6.png)

🔎 Why Swagger is Important?
Makes APIs self-documented
Helps frontend teams understand endpoints
Reduces communication gaps
Allows API testing without Postman
Improves team collaboration
Essential for production systems
👨‍💻 How Frontend Teams Use Swagger

Frontend developers:
Check request & response formats
Understand required headers
View authentication requirements
Test endpoints directly
Build UI based on documented responses
Swagger acts as a contract between backend and frontend teams.

🌿 Git Workflow
Create a new branch
git checkout -b feature/swagger-jwt
Add changes
git add .
Commit changes
git commit -m "Added Swagger with JWT authentication"
Push branch
git push origin feature/swagger-jwt
Merge to main
git checkout main
git merge feature/swagger-jwt
git push origin main

🧪 Thunder Client Testing
Register
POST → /api/auth/register
Login
POST → /api/auth/login
Copy token from response.
Get Tasks
GET → /api/tasks
Add Header:
Authorization : Bearer <token>

🧠 Machine Test Summary (Day 7)
✔ Setup Swagger
✔ Document Register
✔ Document Login
✔ Document Get Tasks
✔ Enable JWT Authentication in Swagger
✔ Test Protected API via Swagger UI

🎯 Final Status
✔ Authentication Implemented
✔ Authorization Secured
✔ Swagger Integrated
✔ APIs Production Ready

📌 Author
Kamalraj