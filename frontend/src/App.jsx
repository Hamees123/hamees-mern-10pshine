// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import AuthForm from './Pages/Auth_form'
// import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom"
// import MyNavbar from './components/MyNavbar'
// import Notes_Dashboard from './Pages/Notes_Dashboard'
// import Profile from './Pages/Profile'
// import EditNote from './Pages/EditNote'
// import { Toaster } from 'react-hot-toast'
// function App() {
// const user = localStorage.getItem("user");
//   return (
//     <>
//  <Toaster
//         position="top-center"
//         reverseOrder={false}
//         toastOptions={{
//           success: {
//             style: { background: "#4ade80", color: "white" }, // green
//           },
//            update: {
//             style: { background: "#2193b0", color: "white" }, // blue
//           },
          
//           error: {
//             style: { background: "#ef4444", color: "white" }, // red
//           },
//         }}
//       />

//  <BrowserRouter>
//  {user && <MyNavbar/>}

//  <Routes>
//         {/* Unauthenticated users → only AuthForm */}
//         {!user && (
//           <>
//           <Route path="/" element={<AuthForm />} />
//            <Route path="*" element={<Navigate to="/" replace />} />
//       </>
//       )}

//         {/* Authenticated users → protected routes */}
//         {user && (
//           <>
//             <Route path="/" element={<Navigate to="/dashboard" replace />} />
//             <Route path="/dashboard" element={<Notes_Dashboard />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/edit" element={<EditNote />} />
//             {/* Redirect root path to dashboard if logged in */}
//             <Route path="/dashboard" element={<Notes_Dashboard/>} />
//            <Route path="*" element={<Navigate to="/dashboard" replace />} />
//           </>
        
        
//         )}
//       </Routes>
 
//  </BrowserRouter>

    
    
//     </>
//   )
// }

// export default App




import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthForm from "./Pages/Auth_form";
import MyNavbar from "./components/MyNavbar";
import Notes_Dashboard from "./Pages/Notes_Dashboard";
import Profile from "./Pages/Profile";
import EditNote from "./Pages/EditNote";
import { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState(() => localStorage.getItem("user"));

  // optional: sync with localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem("user"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: { style: { background: "#4ade80", color: "white" } },
          error: { style: { background: "#ef4444", color: "white" } },
        }}
      />

      <BrowserRouter>
        {user && <MyNavbar setUser={setUser} />}

        <Routes>
          {!user && (
            <>
              <Route path="/" element={<AuthForm setUser={setUser} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}

          {user && (
            <>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Notes_Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edit" element={<EditNote />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
