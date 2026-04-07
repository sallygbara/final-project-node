# 📘 Final Project Node.js – Cards API

## 📌 תיאור הפרויקט

פרויקט צד שרת שפותח ב־**Node.js + Express + TypeScript + MongoDB**.

המערכת מאפשרת:

* ניהול משתמשים
* הרשמה והתחברות עם JWT
* ניהול כרטיסי ביקור
* יצירה, עריכה, מחיקה ולייק לכרטיסים
* הרשאות לפי סוג משתמש (רגיל / עסקי / אדמין)

הפרויקט נבנה לפי דרישות **HackerU – Final Project Node.js**.

---

## 🛠️ טכנולוגיות

* Node.js
* Express
* TypeScript
* MongoDB + Mongoose
* JWT
* bcryptjs
* Zod / Joi Validation
* Morgan Logger
* CORS
* dotenv

---

## 📁 מבנה תיקיות

```text
src
├── config
├── database
├── error
├── logs
├── middleware
├── routes
├── service
├── types
├── validations
└── index.ts
```

---

## 🚀 התקנה והרצה

### 1) התקנת חבילות

```bash
pnpm install
```

### 2) יצירת קובץ `.env`

```env
DB_CONNECTION_STRING=mongodb://localhost:27017/cardsDB
PORT=3000
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

### 3) הרצת השרת

```bash
pnpm dev
```

השרת ירוץ ב:

```text
http://localhost:3000
```

---

## 👤 Users API

### הרשמה

`POST /users`

### התחברות

`POST /users/login`

### כל המשתמשים (Admin)

`GET /users`

### משתמש לפי מזהה

`GET /users/:id`

### עדכון משתמש

`PUT /users/:id`

### שינוי סטטוס עסקי

`PATCH /users/:id`

### מחיקת משתמש

`DELETE /users/:id`

---

## 🪪 Cards API

### כל הכרטיסים

`GET /cards`

### הכרטיסים שלי

`GET /cards/my-cards`

### כרטיס לפי מזהה

`GET /cards/:id`

### יצירת כרטיס

`POST /cards`

### עריכת כרטיס

`PUT /cards/:id`

### לייק / הסרת לייק

`PATCH /cards/:id`

### מחיקת כרטיס

`DELETE /cards/:id`

---

## 🔐 הרשאות

המערכת כוללת middleware עבור:

* אימות JWT
* בדיקת Admin
* בדיקת Business User
* בדיקת Owner / Admin

---

## 🧪 בדיקות מומלצות

מומלץ לבדוק עם:

* Postman
* Thunder Client
* Bruno

---

## 👨‍💻 מפתח

פותח על ידי **סאלי גבארה** כחלק מפרויקט סיום מודול Node.js.
