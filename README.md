Day 6 – Security Hardening

Objective

The objective of Day 6 is to secure the backend APIs from common attacks by implementing:
Helmet for security headers
Rate limiting on authentication routes
JWT-based authentication middleware
Protected task routes
This ensures the API is protected against brute force attacks and common web vulnerabilities.
Features Implemented

1. Helmet Security
Helmet is used to add important HTTP security headers.
It protects against:
Cross-Site Scripting (XSS)
Clickjacking
MIME sniffing
Content injection attacks
Helmet is applied globally to all routes.
2. Rate Limiting

Rate limiting is added to authentication routes to prevent brute force attacks on login.
Configuration:
Time window: 1 minute
Maximum attempts: 5
After limit exceeded: 429 Too Many Requests
This prevents attackers from repeatedly guessing passwords.
3. Authentication Middleware

JWT authentication middleware is used to protect private routes.
Behavior:
Checks Authorization header
Verifies token
Allows access only if token is valid
Otherwise returns 401 Unauthorized
4. Protected Task Routes

Task APIs are protected using authentication middleware.
Without token:
Response: 401 Unauthorized
With valid token:
Response: 200 OK with user tasks
Tech Stack
Node.js
Express.js
MongoDB
Mongoose
JWT
Helmet
Express Rate Limit
Installation
Install dependencies:
npm install

Run server:
npm run dev

or

npm start
Environment Variables
Create config/config.env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/day6_security
JWT_SECRET=supersecretkey
API Endpoints
Register User
POST
/api/auth/register
Login User
POST
/api/auth/login
Returns JWT token.
Get Tasks (Protected)
GET
/api/tasks
Requires Authorization header:
Authorization: Bearer <token>
Security Testing
Helmet Testing
Call any API and check response headers.
Expected headers:

X-Content-Type-Options
X-Frame-Options
Content-Security-Policy
X-DNS-Prefetch-Control
If visible, Helmet is working.
Rate Limit Testing
Call login API multiple times quickly.
Expected:
Status: 429
Message:
Too many login attempts, please try again later
Protected Route Testing
Without token:
Status: 401 Unauthorized
With token:
Status: 200 OK
Task data returned
Why Login API Is Most Attacked
Login endpoints are the primary target for attackers because they attempt brute force attacks to guess user passwords and gain unauthorized access.
What Helmet Protects From
Helmet protects applications by adding security headers that defend against:
Cross-Site Scripting (XSS)
Clickjacking
MIME sniffing
Content injection attacks
Final Outcome
After completing Day 6:
APIs are secured with Helmet
Authentication routes are protected with rate limiting
Task routes require valid JWT
Backend is hardened against common attacks
This makes the backend closer to production-ready security standards.

Register Success
![alt text](image.png)

Login Success
![alt text](image-1.png)

Get Tasks (Protected)
![alt text](image-2.png)
![alt text](image-3.png)

Helmet Testing
![alt text](image-4.png)