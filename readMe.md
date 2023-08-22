# 🚀 Login && Register Project

The "Login && Register" project is a secure user authentication and registration system built using Node.js, Express.js, and MongoDB. This project aims to provide a robust and user-friendly authentication process, including features such as email verification, secure password recovery, token-based login, and protection against CSRF vulnerabilities.

## ✨ Features

- User Registration:
  - Secure registration process with email verification.
  - Customizable email templates for registration verification.
  
- Password Recovery:
  - Secure account recovery through password reset.
  - Customizable email templates for password reset.

- Token-based Authentication:
  - Upon successful login, a token is provided and can be stored as a cookie.
  
- CSRF Token Protection:
  - CSRF tokens are implemented to prevent Cross-Site Request Forgery attacks.
  
- API Monitoring and Logging:
  - All API requests are monitored and logged, with logs stored in the access.log file.
  
- API Documentation:
  - APIs are documented using Swagger documentation.
  - Access the API documentation through the /api-docs route.

## 🚦 Getting Started

1. Clone the repository:
   ```bash
   1)git clone https://github.com/your-username/Login-and-Register.git
   2)cd Login-and-Register
   3)run npm i
   4)change `.env.example` to `.env` and update its values with your own
   4)run npm start  Or  nodemon server.js