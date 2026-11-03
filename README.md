# ClassicStudio – Creative Studio Booking Platform

**Live Website:** [ClassicStudio](https://classicstudio-client.vercel.app/)

ClassicStudio is a full-stack creative studio booking platform where users can discover and book spaces for photography, music, podcasts, workshops, events, and other creative activities. Studio owners can create and manage their studio listings, upload images, update studio information, and manage bookings through a simple and responsive interface.

## ✨ Features

- **Authentication:** User authentication powered by Better Auth, with JWT-based token verification for protected backend APIs.
- **Studio Discovery:** Browse available creative studios and explore their details, images, amenities, pricing, and other information.
- **Studio Management:** Studio owners can add, view, edit, and delete their studio listings.
- **Image Upload:** Upload multiple studio images using ImgBB image hosting.
- **Studio Details:** View individual studio information through dynamic routes.
- **Booking System:** Submit booking requests by selecting a date and time.
- **Booking Availability:** Prevent overlapping bookings for already confirmed time slots.
- **My Bookings:** View personal booking history and manage pending reservations.
- **Booking Cancellation:** Cancel pending booking requests.
- **My Listings:** View and manage studios added by the logged-in studio owner.
- **Featured Studios:** Display recently added studios on the homepage.
- **Dark Mode:** Switch between light and dark themes.
- **Responsive Design:** Optimized layouts for desktop, tablet, and mobile devices.
- **Modern UI:** Built with reusable components and interactive elements using shadcn/ui and Lucide icons.

## 🛠️ Technology Stack

### Frontend
- Next.js (App Router)
- React.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- next-themes
- Better Auth

### Backend
- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT)
- Jose
- Multer
- ImgBB
- CORS
- dotenv

## ⚙️ Local Setup

Follow these steps to run the frontend locally.

### 1. Clone the repository

```bash
git clone https://github.com/suhitajahan-Easha/Classicstudio-client.git
```

### 2. Navigate to the project directory

```bash
cd classicstudio-client
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=https://classicstudio-server.vercel.app
```


### 5. Start the development server

```bash
npm run dev
```

### 6. Open the application

Visit:

```text
http://localhost:3000
```


## 🧪 Examiner Test Credentials

Use the following credentials to explore the application:

| Field | Value |
|---|---|
| Email | sadia@gmail.com |
| Password | Sadia100 |

**Note:** Use only a dedicated test account. Never include your personal account password in a public repository.

## 📁 Project Structure

```text
classicstudio-client/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── ...
├── .env.example
├── package.json
└── README.md
```

## 👩‍💻 Developer

**Suhita Jahan Easha**

- **GitHub:** [suhitajahan-Easha](https://github.com/suhitajahan-Easha)
- **LinkedIn:** [Suhita Jahan Easha](https://www.linkedin.com/in/suhita-jahan-easha/)

---

⭐ Thank you for visiting ClassicStudio! I hope you enjoy exploring the platform.