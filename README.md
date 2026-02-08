# MERN Backend – Production Ready (JWT Auth)

A clean and scalable Node.js + Express backend built with best practices for real-world MERN applications.
Includes JWT authentication, centralized error handling, secure configuration, and modular folder structure.

---
## Project Goal

This project provides a **production-ready backend foundation** that you can reuse for:

* Authentication systems
* Full-stack MERN apps
* SaaS projects
* Startup MVPs
* Learning professional backend architecture

---
## Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Bcrypt (Password Hashing)
* Dotenv (Environment Config)
* Nodemon (Development)

---
## Features

### Authentication

* User Registration
* Secure Login
* Password Hashing
* JWT Token Generation
* Protected Routes

### Security & Best Practices

* Centralized Error Handling
* Async Handler Wrapper
* Environment Variables
* Clean Controller Structure
* MVC Pattern

### Scalable Architecture

src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middlewares/
 ├── utils/
 ├── config/
 └── server.js
```
---
## Installation

### 1. Clone the Repository

git clone https://github.com/your-username/mern_backend_production_ready.git
cd mern_backend_production_ready

### 2. Install Dependencies

npm install

### 3. Create `.env` File

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

## Run the Project

### Development

npm run dev

### Production

npm start

Server runs at:

http://localhost:5000

---

## API Routes

### Auth Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |
| GET    | /api/auth/profile  | Protected route   |

---
## Environment Variables

| Variable   | Description              |
| ---------- | ------------------------ |
| PORT       | Server Port              |
| MONGO_URI  | MongoDB Connection URL   |
| JWT_SECRET | Secret for JWT tokens    |
| NODE_ENV   | development / production |
---

## Future Improvements

* Refresh Tokens
* Role Based Authorization
* Email Verification
* Password Reset System
* Rate Limiting
* Logging (Winston / Morgan)
* Docker Support

---
Author

**Kamalraj**
Backend & MERN Developer

---

## License

This project is open for learning and personal use.


Get tasks with pagination
![alt text](image.png)

Filter by status
![alt text](image-1.png)
![alt text](image-2.png)

Search tasks
![alt text](image-3.png)

Pagination + filter + search (combined)
![alt text](image-4.png)

Server Running
![alt text](image-5.png)
