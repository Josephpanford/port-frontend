import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <h1>Port Communication Platform</h1>
      <p>Welcome to the internal chat system</p>
    </div>
  )

function Login() {
  return <h2>Login Page</h2>
}

function Dashboard() {
  return <h2>Dashboard</h2>
}

function Chat() {
  return <h2>Chat Page</h2>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}
}
export default App