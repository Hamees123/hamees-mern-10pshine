import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthForm from './Pages/Auth_form'
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom"
import MyNavbar from './components/MyNavbar'
import Notes_Dashboard from './Pages/Notes_Dashboard'
import Profile from './Pages/Profile'
import EditNote from './Pages/EditNote'

function App() {
const user = localStorage.getItem("user");
  return (
    <>


 <BrowserRouter>
 {user && <MyNavbar />}

 <Routes>
        {/* Unauthenticated users → only AuthForm */}
        {!user && (
          <>
          <Route path="/" element={<AuthForm />} />
           <Route path="*" element={<Navigate to="/" replace />} />
      </>
      )}

        {/* Authenticated users → protected routes */}
        {user && (
          <>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Notes_Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit" element={<EditNote />} />
            {/* Redirect root path to dashboard if logged in */}
            <Route path="/dashboard" element={<Notes_Dashboard/>} />
           <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        
        
        )}
      </Routes>
 
 </BrowserRouter>

    
    
    </>
  )
}

export default App
