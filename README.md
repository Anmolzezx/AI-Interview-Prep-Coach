# 🎯 AI Interview Prep Coach

A full-stack AI-powered interview preparation mobile application built with React Native, Node.js, PostgreSQL, and Google Gemini API.

## 📱 Features

- **AI-Powered Feedback**: Real-time interview feedback using Google Gemini API
- **Voice Recognition**: Practice interviews with speech-to-text functionality
- **Resume Analysis**: Upload resume for personalized interview questions
- **Company-Specific Prep**: Targeted questions for FAANG and other companies
- **Progress Tracking**: Analytics and performance insights
- **Daily Challenges**: Maintain streak with daily practice questions
- **Offline Mode**: Practice anywhere with offline support
- **Dark Mode**: Eye-friendly interface

## 🛠️ Tech Stack

### Frontend (Mobile)
- React Native CLI (TypeScript)
- Redux Toolkit (State Management)
- React Navigation 6
- React Native Voice (Speech Recognition)
- Axios (API Client)
- AsyncStorage (Local Storage)
- React Native Reanimated (Animations)

### Backend
- Node.js + Express (TypeScript)
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt (Password Hashing)
- Google Gemini API

### DevOps
- Git/GitHub
- Render.com (Backend Hosting)
- Neon (PostgreSQL Hosting)

## 📂 Project Structure

```
ai-interview-prep-coach/
├── mobile/                 # React Native app
│   ├── src/
│   │   ├── screens/       # App screens
│   │   ├── components/    # Reusable components
│   │   ├── navigation/    # Navigation setup
│   │   ├── store/         # Redux store
│   │   ├── services/      # API services
│   │   ├── utils/         # Utilities
│   │   └── types/         # TypeScript types
│   └── App.tsx
│
├── backend/               # Node.js backend
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── controllers/  # Route controllers
│   │   ├── services/     # Business logic
│   │   ├── middleware/   # Express middleware
│   │   ├── prisma/       # Database schema
│   │   ├── utils/        # Utilities
│   │   └── types/        # TypeScript types
│   └── server.ts
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- React Native CLI
- Android Studio / Xcode
- PostgreSQL

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Configure your .env file
npx prisma migrate dev
npm run dev
```

### Mobile App Setup

```bash
cd mobile
npm install
npx react-native run-android
# or
npx react-native run-ios
```

## 🔐 Environment Variables

### Backend (.env)
```
DATABASE_URL="postgresql://user:password@localhost:5432/interview_prep"
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="7d"
GEMINI_API_KEY="your-gemini-api-key"
PORT=3000
NODE_ENV="development"
```

### Mobile (.env)
```
API_BASE_URL="http://localhost:3000/api"
```

## 📝 Development Roadmap

- [x] Day 1: Project Setup & Database Foundation
- [ ] Day 2: Authentication System
- [ ] Day 3: Gemini API Integration
- [ ] Day 4: Mobile App Foundation
- [ ] Day 5: Authentication Screens
- [ ] Day 6: Home Dashboard
- [ ] Day 7: Interview Session Screen
- [ ] Day 8: AI Interview Flow
- [ ] Day 9: Feedback & History
- [ ] Day 10: Progress Dashboard
- [ ] Day 11: Resume Upload & Company Prep
- [ ] Day 12: Daily Challenge & Notifications
- [ ] Day 13: Offline Mode
- [ ] Day 14: UI/UX Polish
- [ ] Day 15: Performance & Testing
- [ ] Day 16: Deployment

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use.

## 📄 License

MIT License

## 👨‍💻 Author

Built as a portfolio project to demonstrate full-stack development skills with modern technologies.

---

**Status**: 🚧 In Development
**Started**: January 2026
