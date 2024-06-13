Got it! Let's enhance the README with more visuals, better formatting, and ensure the video and images are displayed correctly. Here's an updated and more attractive version:

````markdown
# 🎉 Evently

![Live](https://img.shields.io/badge/Live-Link-blue?style=for-the-badge&logo=netlify) [Evently](https://evently007.netlify.app/)

Evently is a comprehensive, full-stack platform for managing events, built on Next.js 14. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.

Join our active [Discord community](#) with over 27k+ members if you need assistance or face any bugs. It's a place where people help each other out.

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Showcase](#showcase)
6. [Links](#links)

---

## 🤖 Introduction

Welcome to Evently! This application is designed to make event management simple and efficient. Whether you're looking to organize an event or find exciting events to attend, Evently has got you covered.

---

## ⚙️ Tech Stack

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
- ![Zod](https://img.shields.io/badge/Zod-3178C6?style=for-the-badge&logo=zod&logoColor=white)
- ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white)
- ![Shadcn](https://img.shields.io/badge/Shadcn-61DAFB?style=for-the-badge&logo=shadcn&logoColor=white)
- ![uploadthing](https://img.shields.io/badge/uploadthing-555?style=for-the-badge&logo=uploadthing&logoColor=white)

---

## 🔋 Features

- **Authentication (CRUD) with Clerk:** Secure and efficient user management.
- **Events (CRUD):** Full control over event management.
  - **Create Events:** Generate new events effortlessly.
  - **Read Events:** Access detailed views of all events.
  - **Update Events:** Modify event details dynamically.
  - **Delete Events:** Remove events from the system.
- **Related Events:** Smartly connects and displays related events.
- **Organized Events:** Efficiently organized and user-friendly display.
- **Search & Filter:** Robust system to easily find events.
- **New Category:** Dynamic categorization for new event categories.
- **Checkout and Pay with Stripe:** Smooth and secure payment transactions.
- **Event Orders:** Comprehensive order management system.
- **Search Orders:** Quick and efficient search functionality.

---

## 🤸 Quick Start

Follow these steps to set up the project locally.

**Prerequisites:**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository:**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```
````

**Installation:**

Install the project dependencies:

```bash
npm install
```

**Set Up Environment Variables:**

Create a `.env` file in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
NEXT_PUBLIC_STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual credentials.

**Running the Project:**

```bash
npm start
```

---

## 🎬 Showcase

**Project Showcase Video:**

<div style="height: 500px;">
    <video src="./ShowCase/recording.mkv" controls style="width: 100%; height: 100%;"></video>
</div>

**Project Images:**

<div style="display: flex; gap: 10px; justify-content: center;">
    <img src="./ShowCase/2.png" style="width: 19%; height: 400px;" />
    <img src="./ShowCase/3.png" style="width: 19%; height: 400px;" />
    <img src="./ShowCase/4.png" style="width: 19%; height: 400px;" />
    <img src="./ShowCase/1.png" style="width: 19%; height: 400px;" />
    <img src="./ShowCase/5.png" style="width: 19%; height: 400px;" />
</div>

---

## 🔗 Links

- [Live Project](https://evently007.netlify.app/)
- [GitHub Repository](https://github.com/your-username/your-project)

---

## 🚀 More

contribute is free of cost and open source
