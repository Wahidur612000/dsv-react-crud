# User Management – React CRUD Application

A simple **React + TypeScript CRUD application** built with **Vite** to manage user data. The application is **schema-driven**, **extensible**, and demonstrates clean React architecture with proper form validation and API integration.

---

## 🚀 Tech Stack

* **React 18**
* **TypeScript**
* **Vite**
* **Material UI (MUI)**
* **React Hook Form**
* **JSON Server** (mock REST API)

---

## ✨ Features

* Create, Read, Update, Delete (CRUD) users
* Schema-driven dynamic form
* Field-level validation with meaningful error messages
* Edit-in-place user updates
* Clean and responsive UI
* Easy extensibility for adding new fields
* Mock API using JSON Server

---

## 📋 User Fields

The form currently supports:

* First Name
* Last Name
* Phone Number
* Email Address

Each field includes:

* Required validation
* Pattern validation (email, phone, capitalization rules)

---

## 🧩 Project Structure

```
src/
├── api/            # API calls
├── components/     # Reusable UI components
│   ├── DynamicForm.tsx
│   └── UserTable.tsx
├── config/         # Form schema
│   └── userFormSchema.ts
├── hooks/          # Custom hooks
│   └── useUsers.ts
├── pages/          # Page components
│   └── UsersPage.tsx
├── types/          # TypeScript types
│   └── user.ts
├── App.tsx
└── main.tsx
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Wahidur612000/dsv-react-crud.git
cd dsv-react-crud/frontend
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Start the mock API (JSON Server)

Create `db.json` in the project root:

```json
{
  "users": []
}
```

Run JSON Server:

```bash
npx json-server --watch db.json --port 3000
```

API endpoint:

```
http://localhost:3000/users
```

---

### 4️⃣ Start the React app

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 🔁 CRUD Flow

* **Create** → Fill the form and click **Save**
* **Read** → Users are listed in the table
* **Update** → Click **Edit**, update details, click **Update**
* **Delete** → Click **Delete** to remove a user

After Save or Update:

* The form resets automatically
* The table updates instantly

---

## 🧠 Extensibility (IMPORTANT)

This project uses a **schema-driven form**.

### ➕ How to Add a New Field

Edit:

```
src/config/userFormSchema.ts
```

Example:

```ts
{
  name: "address",
  label: "Address",
  type: "text",
  required: false,
}
```

✅ No UI changes needed
✅ No form logic changes needed
✅ Validation and rendering happen automatically

This design makes the application **easy to scale and maintain**.

---

## 🎯 Design Decisions

* **Schema-driven UI** for extensibility
* **React Hook Form** for performance and clean validation
* **JSON Server** to simulate a real backend
* **Material UI** for consistent and accessible UI
* **Separation of concerns** between UI, logic, and API

---

## 🌐 Deployment

The app can be deployed easily using:

* **Vercel**
* **Netlify**
* **GitHub Pages**

Build command:

```bash
npm run build
```

---

## 📌 Assumptions

* Backend API is mocked using JSON Server
* Authentication is out of scope
* Focus is on frontend architecture and extensibility

---

### Backend Deployment
JSON Server is deployed separately on Render to support persistent CRUD operations in production.
The frontend consumes the backend via environment-based API configuration.

## 📄 License

This project is created for assessment and learning purposes.

---

## 👤 Author

**Wahidur Rahman N**
Java Full Stack Developer
React | TypeScript | Spring Boot
