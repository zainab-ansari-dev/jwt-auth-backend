# Express JWT Authentication API

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express-4.x-blue.svg)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)

A secure, production-ready RESTful authentication service built with **Node.js**, **Express**, and **JSON Web Tokens (JWT)**. This repository provides end-to-end user signup and login workflows, complete with password hashing prior to database persistence and JWT issuance for stateless request authorization.

## Features

- **Stateless Authentication**: Uses signed JSON Web Tokens (JWT) for secure session management.
- **Secure Password Hashing**: Passwords are salted and hashed using `bcrypt` / `argon2` before storing in the database.
- **Robust Input Validation**: Validates user registration payload (email format, password strength) prior to processing.
- **Clean Architecture**: Modular controller-service-route pattern for high maintainability.
- **Environment Driven**: Centralized configuration management using `.env`.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Database instance (e.g., MongoDB / PostgreSQL / MySQL)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zainab-ansari-dev/express-jwt-auth.git
   cd express-jwt-auth
2. **Install the dependencies**
   ```bash
   npm install
3. **Set up the environment variables**
    Create a .env file in the project root directory and add the following configuration:
   ```bash
   PORT=8000
   DATABASE_URL=mongodb://localhost:27017/your_db_name
   JWT_SECRET=your_jwt_secret_key_here
4. **Start the application**
   ```bash
   #go live using the VS Code extension

   #run in the back-end folder:
   npm start 
   
