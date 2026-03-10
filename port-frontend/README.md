# Port - Internal Group Chat Application

A modern, React-based frontend for an internal Slack-like group chat application built with Vite, React Router, and Tailwind CSS.

## Features

- **Authentication System** - Login/Register with localStorage persistence
- **Protected Routes** - Route guarding based on authentication status
- **Group Management** - View and navigate between different chat groups
- **Real-time Chat UI** - Clean message interface with user avatars
- **Responsive Design** - Mobile-friendly layout using Tailwind CSS
- **TypeScript Support** - Full type safety throughout the application

## Tech Stack

- **React 19** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast development server and build tool
- **Context API** - State management for authentication

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ProtectedRoute.tsx
├── context/            # React Context providers
│   └── AuthContext.tsx
├── pages/              # Page components
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── DashboardPage.tsx
│   └── GroupChatPage.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

## Usage

1. **Login** - Click "Sign in" on the login page (uses demo token)
2. **Dashboard** - View available groups after authentication
3. **Chat** - Click any group to enter the chat interface
4. **Logout** - Use the logout button to end your session

## Authentication

The app uses a frontend-only authentication system for the MVP:
- Tokens are stored in `localStorage`
- Protected routes redirect to `/login` if not authenticated
- Demo authentication uses a fake token for testing

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Future Enhancements

- Backend API integration
- Real-time messaging with WebSockets
- User profiles and avatars
- File sharing capabilities
- Message search and history
- Group management features
- Notification system
