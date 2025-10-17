import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthForm from './Pages/Auth_form'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MyNavbar from './components/MyNavbar'
import Notes_Dashboard from './Pages/Notes_Dashboard'
import Profile from './Pages/Profile'
import EditNote from './Pages/EditNote'

function App() {

  return (
    <>


 <BrowserRouter>
 <MyNavbar/>


 <Routes>
<Route path='/' element={<AuthForm/>} />
<Route path='/dashboard' element={<Notes_Dashboard/>} />
<Route path='/profile' element={<Profile/>} />
<Route path='/edit' element={<EditNote/>} />




 </Routes>
 
 
 
 </BrowserRouter>

    
    
    </>
  )
}

export default App
