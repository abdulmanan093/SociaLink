# SociaLink App  

![.NET](https://img.shields.io/badge/.NET-9.0-blueviolet?style=for-the-badge&logo=dotnet)  
![Angular](https://img.shields.io/badge/Angular-20-red?style=for-the-badge&logo=angular)  
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)  
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker)  
![Azure](https://img.shields.io/badge/Deployed%20on-Azure-0078D4?style=for-the-badge&logo=microsoftazure)  
![License](https://img.shields.io/badge/License-Educational-lightgrey?style=for-the-badge) 

# SociaLink App

**Socialink** is a modern full-stack social networking web application that enables users to register, connect, chat in real time, and share content securely. Built with **ASP.NET Core (.NET 9)** on the backend and **Angular** on the frontend, it integrates **SQL Server** for data storage, supports **photo uploads with likes and filters**, and offers **real-time messaging via SignalR**. The application is containerized with **Docker** for streamlined development and can be seamlessly deployed to **Azure App Service** for production.

## 🚀 Features

### 🔹 Backend (ASP.NET Core API)

* User authentication & authorization (JWT-based).
* User management with roles (Admin, Member, etc.).
* Messaging system with real-time updates using **SignalR**.
* Photo upload & management with **Cloudinary integration**.
* Like system between users.
* Filtering, searching, and pagination for members.
* Error handling middleware and API exception handling.
* Repository & Unit of Work pattern for clean architecture.

### 🔹 Frontend (Angular)

* User registration & login with persistent sessions.
* Member profiles with photo galleries.
* Messaging system with real-time updates.
* Admin dashboard for managing users and photos.
* Error handling pages (404 Not Found, 500 Server Error).
* Custom Angular services (Auth, Member, Message, Admin, Presence).
* Interceptors for JWT tokens, loading states, and error handling.
* Pipes for age calculation & relative time.

---

## 🛠️ Tech Stack

### Backend

* **ASP.NET Core 9**
* **Entity Framework Core** (with Migrations)
* **SQL Server / LocalDB**
* **SignalR** (real-time communication)
* **Cloudinary API** (for photo uploads)

### Frontend

* **Angular 20**
* **TypeScript**
* **RxJS**
* **Tailwind**

### DevOps / Deployment

* **Docker Compose**
* **Azure App Service** 

* **Live Demo Domain:**
  [https://socialink-app-duggepc6fhcaeef2.centralindia-01.azurewebsites.net](https://socialink-app-duggepc6fhcaeef2.centralindia-01.azurewebsites.net)

---

## 📂 Project Structure

```
SociaLink/
│
├── API/                     # ASP.NET Core Web API backend
│   ├── Controllers/          # API endpoints (Users, Messages, Members, etc.)
│   ├── Data/                 # EF Core context, repositories, migrations
│   ├── DTOs/                 # Data transfer objects
│   ├── Entities/             # Database entities
│   ├── Extensions/           # Extension methods for services & claims
│   ├── Helpers/              # Utility classes (pagination, params, etc.)
│   ├── Interfaces/           # Repository & service contracts
│   ├── Middleware/           # Custom middleware (Exception handling)
│   ├── Services/             # Photo & Token services
│   ├── SignalR/              # Real-time hubs (MessageHub, PresenceHub)
│   └── Program.cs            # Entry point
│
├── client/                   # Angular frontend
│   ├── src/app/              # Core Angular app
│   │   ├── core/             # Guards, interceptors, services, pipes
│   │   ├── features/         # Feature modules (auth, members, messages, admin, etc.)
│   │   ├── layout/           # Navigation, theme
│   │   ├── shared/           # Shared components (dialogs, inputs, pagination)
│   │   └── types/            # TypeScript interfaces (User, Message, Member)
│   ├── angular.json          # Angular configuration
│   ├── package.json          # Frontend dependencies
│   └── tsconfig.json         # TypeScript configuration
│
├── docker-compose.yml        # Docker configuration
├── SociaLink.sln             # Solution file
└── README.md                 # Documentation
```

---

## ⚡ Getting Started

### Prerequisites

* [.NET 9 SDK](https://dotnet.microsoft.com/download)
* [Node.js & npm](https://nodejs.org/)
* [SQL Server or LocalDB](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-2019-express)
* [Angular CLI](https://angular.io/cli)

### Clone the repo

```bash
git clone https://github.com/abdulmanan093/socialink-app.git
cd socialink-app
```

### Backend Setup

```bash
cd API
dotnet restore
dotnet ef database update
dotnet run
```

Backend will run on: **[https://localhost:5182]**

### Frontend Setup

```bash
cd client
npm install
ng serve -o
```

Frontend will run on: **[http://localhost:4200](http://localhost:4200)**

---

## 📸 Screenshots

<img width="1913" height="896" alt="image" src="https://github.com/user-attachments/assets/5301be0f-a886-497f-ab42-ad3d0f2be05d" />
<img width="1920" height="884" alt="image" src="https://github.com/user-attachments/assets/35aaac7f-0029-4210-b6c3-2d8f532b9bad" />

---

## 📖 Learning Source

This project was built while learning from the course:
**Build an app with ASP.NET Core and Angular from scratch** by **Neil Cummings**
👉 [View Course](https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/)

---

## 📜 License

This project is for **educational purposes only**.
If you wish to use it in production, please review the code and configure authentication, security, and deployment accordingly.
