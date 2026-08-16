# Node.js Authentication API (JWT & MongoDB)

A secure backend authentication service built with **Node.js**, **Express**, and **MongoDB**. This repository demonstrates industry-standard security practices for handling user identity, including one-way password hashing prior to database storage and stateless session management via JSON Web Tokens (JWT).

---

## 📹 Sign-In Demo

![Sign-In Demo]

> *Screen recording demonstrating user sign-in, token generation, and authentication flow.*

---

## ✨ Features

* **JWT Authorization:** Issues signed JSON Web Tokens upon successful login to authorize protected API routes via Bearer headers.
* **Password Hashing:** Passwords are salted and hashed using `bcrypt` before being stored in MongoDB, ensuring plain-text credentials are never exposed or saved.
* **Database Persistence:** Mongoose user schemas enforce structural data validation and unique constraint checks for email accounts.
* **Protected Middleware:** Custom route protection middleware validates incoming JWT signatures and extracts user context.
* **Sanitized Responses:** API responses strictly strip out sensitive data (hashes, salts) before sending responses to the client.

---

## 🛠 Tech Stack

| Technology | Role |
| :--- | :--- |
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web framework for API route management |
| **MongoDB / Mongoose** | NoSQL database & ODM modeling |
| **jsonwebtoken** | Token creation and verification |
| **bcryptjs** | Salt generation and password hashing |
| **dotenv** | Environment variable management |

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and define the following variables:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/auth_demo
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=1d
