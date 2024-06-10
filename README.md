# User Registration Functionality Documentation

---

## Overview

This document provides a guide to the User Registration functionality implemented using the MERN stack with TypeScript. It includes details about user registration, authentication using JWT (JSON Web Tokens), session management using cookie-session, XSS sanitation using Helmet, and request rate limiting using express-rate-limit.

## Technologies Used

- **MERN Stack**:
  - MongoDB: Database
  - Express.js: Backend framework
  - React.js: Frontend framework
  - Node.js: JavaScript runtime environment
- **TypeScript**: Superset of JavaScript adding static typing.
- **cookie-session**: Session middleware for Express.
- **JWT Authentication**: JSON Web Tokens for user authentication.
- **Helmet**: Middleware to secure Express apps by setting various HTTP headers.
- **express-rate-limit**: Middleware to limit repeated requests to public APIs and/or endpoints.

## Functionality

1. **User Registration**: Users can register with the system providing necessary details.
2. **JWT Authentication**: Upon successful registration, users are authenticated and provided with a JWT token for subsequent requests.
3. **Session Management**: Sessions are managed using cookies for user authentication.
4. **XSS Sanitation**: Helmet middleware is used to prevent XSS attacks.
5. **Rate Limiting**: express-rate-limit middleware is implemented to limit the rate of requests.

## Setup

1. **Clone Repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
2. **Install Dependencies**
   ```bash
   cd backend  && npm install
   cd frontend  && npm install
3. **Environment Variables**
  - Create a .env file in the backend directory with the following variables
    MONGO_CONNECTION_STRING=
    JWT_SECRET_KEY=
4. **Start the Server and Client**
    ```bash
    cd backend  && npm run dev
    cd frontend  && npm start




   
