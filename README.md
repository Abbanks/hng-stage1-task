# HNG Stage 1 Task

A lightweight, high-performance API built with Node.js and Express. This project demonstrates backend development fundamentals and DevOps deployment practices, including process management with PM2 and reverse proxying with Nginx.

## 🚀 Live Deployment
The API is publicly accessible at http://aoe-tasks.duckdns.org

## 🛠 Project Overview
This API was developed as part of the HNG Internship Stage 1 task. It provides basic status, health checks, and developer information. 

**Key Features:**
* **Fast Response Times:** All endpoints respond in under 500ms.
* **Persistent Hosting:** Managed by PM2 to ensure 100% uptime and auto-restart on server reboot.
* **Secure Routing:** Deployed behind an Nginx Reverse Proxy on an Ubuntu VPS.

## 📡 API Endpoints

All endpoints return a `200 OK` status code and `Content-Type: application/json`.

| Method | Endpoint | Description | Expected Response |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Root status | `{"message": "API is running"}` |
| `GET` | `/health` | Health check | `{"message": "healthy"}` |
| `GET` | `/me` | Developer info | `{"name": "Your Name", "email": "your@email.com", "github": "github.com/user"}` |

## 💻 Local Setup and Installation

Follow these steps to run the project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/hng-stage1-task.git](https://github.com/yourusername/hng-stage1-task.git)
    cd hng-stage1-task
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    node app.js
    ```
    *The server will start by default on port 3000.*

4.  **Test the API:**
    ```bash
    curl http://localhost:3000/health
    ```

## 🏗 Deployment Infrastructure
The production environment is hosted on a cloud VPS and follows standard DevOps practices:
* **Host:** Ubuntu 24.04 LTS (AWS EC2)
* **Runtime:** Node.js
* **Process Manager:** PM2 (ensures the service stays up on its own)
* **Web Server:** Nginx (acting as a Reverse Proxy to hide the internal port)

