🚀 MERN Backend – Production Ready (Day 8)
📌 Project Overview

This project is a production-ready backend built using:
Node.js
Express.js
MongoDB Atlas
Mongoose
Swagger (API Docs)
Environment-based configuration
The backend is fully deployed and connected to a cloud database.

🎯 Features
✅ Environment-based configuration (.env)
✅ MongoDB Atlas cloud database
✅ REST API (Create & Get Users)
✅ Swagger API Documentation
✅ Production deployment ready
✅ Secure credential handling

📁 Project Structure
src/
 ├── config/
 │    └── db.js
 ├── controllers/
 │    └── user.controller.js
 ├── models/
 │    └── user.model.js
 ├── routes/
 │    └── user.routes.js
 ├── app.js
 └── server.js

.env
.env.example
package.json
README.md

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone <your-repo-url>
cd MERN_BACKEND_PRODUCTION_READY

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File
Create a .env file in the root directory:

PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_atlas_connection_string

⚠️ Do NOT commit .env file.
🗄️ MongoDB Atlas Setup
Create cluster (Cluster0)
Create Database User
Add IP Address (0.0.0.0/0)
Copy connection string
Replace username & password
Add database name (example: /mern)
Example:
mongodb+srv://username:password@cluster0.mongodb.net/mern?retryWrites=true&w=majority

▶️ Run Locally
npm run dev

Server runs on:
http://localhost:5000

📡 API Endpoints
🔹 Create User

POST /api/users
Body:
{
  "name": "Manu",
  "email": "manu@gmail.com"
}

Response:
201 Created
🔹 Get All Users

GET /api/users

Response:

[
  {
    "_id": "...",
    "name": "Manu",
    "email": "manu@gmail.com",
    "createdAt": "...",
    "updatedAt": "..."
  }
]

📖 API Documentation
Swagger available at:
/api-docs

Example:
http://localhost:5000/api-docs

After deployment:
https://your-app-name.onrender.com/api-docs

🌍 Deployment (Render)
Build Command
npm install

Start Command
npm start


Post method
![alt text](image.png)

Get method
![alt text](image-1.png)

MongoDB Atlas connect
![alt text](image-2.png)

Server connect
![alt text](image-3.png)


Environment Variables (Render Dashboard)
Key	Value
PORT	10000
NODE_ENV	production
MONGO_URI	Atlas Connection String
🧠 Development vs Production
Development	Production
Local testing	Live server
Debug logs enabled	Optimized performance
Local database	Cloud database
Frequent changes	Stable release
🔐 Why .env Should Not Be Committed?

Contains sensitive credentials
Database passwords must stay secret
Prevents security breaches
Use .env.example instead

👨‍💻 Author
Kamalraj
