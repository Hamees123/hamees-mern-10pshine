# 📝 Notes App

A full-stack **Notes Application** built with **React.js**, **Node.js**, **Express.js**, and **PostgreSQL**.
This app allows users to **create, edit, delete, and manage notes** efficiently with a clean and responsive interface.

---

## 🚀 Features

* ✨ **Create Notes** — Quickly add new notes with title and description.
* 🦾 **Edit Notes** — Update existing notes easily.
* 🗑️ **Delete Notes** — Remove notes you no longer need.
* 📁 **Persistent Storage** — Notes are stored in a PostgreSQL database.
* 🔐 **Secure API** — Built using Express.js with RESTful routes.
* ⚡ **Fast & Responsive UI** — Developed in React.js with modern hooks and routing.

---

## 🛠️ Tech Stack

| Layer               | Technology                                  |
| :------------------ | :------------------------------------------ |
| Frontend            | React.js (Vite or CRA), Axios, React Router |
| Backend             | Node.js, Express.js                         |
| Database            | PostgreSQL                                  |
| ORM / Query Builder | Sequelize                                   |
| Styling             | CSS / TailwindCSS / Bootstrap               |

---

## 🗂️ Project Structure

```
hamees-mern-10pshine/
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components (NoteCard, NoteForm, etc.)
│   │   ├── pages/        # App pages (Dashboard, EditNote, etc.)
│  
│   │   ├── App.jsx
│   │   └── index.jsx
│   └── package.json
│
├── backend/              # Node.js + Express backend
│   ├── DB.js              # Database connection
│   ├── models/           # PostgreSQL models or schema
│   ├── routes/           # Express routes (notes.js, users.js)
│   ├── controllers/      # Logic for routes
│   ├── server.js
|   ├── test/
│   └── package.json
│
├── .env
├── README.md
└── package.json          # Root config (optional for scripts)
```

---







## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Hamees123/hamees-mern-10pshine.git
cd hamees-mern-10pshine
```

### 2️⃣ Install dependencies

#### For backend:

```bash
cd backend
npm install
```

#### For frontend:

```bash
cd ../frontend
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file inside the **backend** folder:

```
PORT=5000
DATABASE_URL=postgres://user:password@localhost:5432/notesdb
```

### 4️⃣ Setup PostgreSQL database

Create the database manually or via command:

```bash
createdb notesdb
```

Then run migrations (if using Sequelize/Knex).

### 5️⃣ Run the app

#### Start backend server:

```bash
cd backend
npm run start
```
Open 🔗 [http://localhost:5000]

#### Start frontend:

```bash
cd ../frontend
npm run dev
```

Open 🔗 [http://localhost:5173]

---



## 🧪 Running with SonarQube

### Step 1: Start SonarQube

```bash
cd C:\path\to\sonarqube\bin\windows-x86-64
StartSonar.bat
```

Access dashboard: **[http://localhost:9000](http://localhost:9000)**

### Step 2: Run the analysis

Inside your project root:

```bash
sonar-scanner \
  -Dsonar.projectKey=Notes \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=sqp_b267ba9aba6b8414494020e52b34513a42ee33f9
```

Check your project report on the SonarQube dashboard.

---

## 🧰 SonarQube Configuration File

Example `sonar-project.properties`:

```
sonar \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.token=sqp_b267ba9aba6b8414494020e52b34513a42ee33f9 \
  -Dsonar.projectKey=Notes\
```

---

## 🧠 Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run start`     | Start backend server       |
| `npm run dev`   | Start frontend (Vite)      |
| `sonar-scanner` | Run SonarQube analysis     |
| `npm test`      | Run unit/integration tests |


## 🧑‍💻 Author

**Your Name**
📧 [hameessheikh10@gmail.com]
🌐 [GitHub](https://github.com/Hamees123)

---

## 🪪 License

This project is licensed under the **MIT License** — feel free to use and modify it.
