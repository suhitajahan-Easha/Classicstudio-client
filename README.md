# ClassicStudio – Creative Studio Booking Platform

**Live Website:** [Add your deployed client-side URL here]

ClassicStudio is a full-stack web application that allows users to explore creative studios, view studio details, and manage their studio bookings. Studio owners can manage their studio listings, while users can browse available spaces and submit booking requests through a simple and responsive interface.

## ✨ Features

- **User Authentication:** Secure user authentication using JSON Web Tokens (JWT).
- **Studio Management:** Create, read, update, and delete studio listings with CRUD functionality.
- **Studio Discovery:** Browse studio listings and view detailed information about each studio.
- **Booking System:** Users can submit studio booking requests and view their reservations.
- **My Bookings:** A private page where users can view their bookings and manage pending reservations.
- **Dark Mode:** Switch between light and dark themes for a comfortable browsing experience.
- **Responsive Design:** Optimized layouts for desktop, tablet, and mobile devices.
- **User-Friendly Interface:** Clean design with intuitive navigation and interactive components.

## 🛠️ Technology Stack

**Frontend**
- Next.js
- React.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

**Backend**
- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT)

## ⚙️ Local Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone YOUR_CLIENT_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd classicstudio-client
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env.local` file in the project root and add the required configuration:

```env
NEXT_PUBLIC_API_URL=YOUR_BACKEND_API_URL
```

Add any other environment variables required by your project.

**5. Start the development server**

```bash
npm run dev
```

**6. Open the application**

Visit:

```text
http://localhost:3000
```

> Make sure the backend server is running and its environment variables are configured before testing API-dependent features.

## 🧪 Examiner Test Credentials

Use the following credentials to explore the application:

| Field | Value |
|---|---|
| Email | ADD_EXAMINER_EMAIL |
| Password | ADD_EXAMINER_PASSWORD |

**Note:** Replace these placeholders with your actual test account credentials. Do not include your personal account password.

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

- GitHub: https://github.com/suhitajahan-Easha
- LinkedIn: https://www.linkedin.com/in/suhita-jahan-easha/

---

⭐ Thank you for visiting ClassicStudio! I hope you enjoy exploring the platform.