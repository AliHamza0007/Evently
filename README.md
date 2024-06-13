# Evently

[![Live](https://img.shields.io/badge/Live-Link-blue?style=for-the-badge&logo=netlify)](https://evently007.netlify.app/)

Evently is a comprehensive, full-stack platform for managing events, built on Next.js 14. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.

Join our active Discord community with over 27k+ members if you need assistance or face any bugs. It's a place where people help each other out.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Showcase](#showcase)
6. [Links](#links)

---

## Introduction

Welcome to Evently! This application is designed to make event management simple and efficient. Whether you're looking to organize an event or find exciting events to attend, Evently has got you covered.

---

## ⚙️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3178C6?style=for-the-badge&logo=zod&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white)
![Shadcn](https://img.shields.io/badge/Shadcn-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![uploadthing](https://img.shields.io/badge/uploadthing-555?style=for-the-badge&logo=uploadthing&logoColor=white)

---

## Features

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

### Cloning the Repository

Clone the repository using Git:

```bash
git clone https://github.com/AliHamza0007/Evently.git
cd Evently
```

### Installation

Install the project dependencies:

```bash
npm install
```

## Set Up Environment Variables

To configure your project environment, follow these steps:

1. **Create a `.env` File:**

   Create a `.env` file in the root directory of your project if it doesn't exist already.

2. **Add the Following Environment Variables:**

   ```dotenv
   # NEXT.js Configuration
   NEXT_PUBLIC_SERVER_URL=

   # CLERK Configuration
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_CLERK_WEBHOOK_SECRET=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   # MongoDB Configuration
   MONGODB_URI=

   # UPLOADTHING Configuration
   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=

   # Stripe Configuration
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

### Project Showcase Video

[![Video Thumbnail](./ShowCase/1.png)](./ShowCase/recording.mkv)

<video controls>
  <source src="./ShowCase/recording.mkv" type="video/x-matroska">
  Your browser does not support the video tag or the file format.
</video>

### Project Images

![Project Image 1](./ShowCase/2.png)
![Project Image 2](./ShowCase/3.png)
![Project Image 3](./ShowCase/4.png)
![Project Image 4](./ShowCase/1.png)
![Project Image 5](./ShowCase/5.png)

---

## 🔗 Links

- [Live Project](https://evently007.netlify.app/)

---

```

```
