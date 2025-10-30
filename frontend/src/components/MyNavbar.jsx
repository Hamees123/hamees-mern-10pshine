import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const NeumorphicNavbar = ({setUser}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // 🔥 triggers re-render

    toast.success("Logged out successfully");
    navigate("/");
  };

  // 🔹 Custom event to open Add Note modal
  const handleAddNoteClick = () => {
    window.dispatchEvent(new Event("openAddNoteModal"));
  };

  return (
    <>
      <style>{`
        .neumorphic-navbar {
          background: #e0e5ec;
          box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
                      -9px -9px 16px rgba(255, 255, 255, 0.5);
        }

        .neumorphic-square-btn {
          background: #e0e5ec;
          box-shadow: 6px 6px 12px rgba(163, 177, 198, 0.6),
                      -6px -6px 12px rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          border-radius: 12px;
          padding: 10px 16px;
          font-weight: 600;
        }

        .neumorphic-square-btn:hover {
          box-shadow: 4px 4px 8px rgba(163, 177, 198, 0.6),
                      -4px -4px 8px rgba(255, 255, 255, 0.5);
          transform: scale(1.03);
          color: #2563eb;
        }

        .neumorphic-square-btn:active {
          box-shadow: inset 4px 4px 8px rgba(163, 177, 198, 0.6),
                      inset -4px -4px 8px rgba(255, 255, 255, 0.5);
        }

        /* ✅ Remove underline from nav links */
        .nav-link {
          text-decoration: none;
        }

        .nav-link:hover {
          text-decoration: none;
        }

        body {
          background: #e0e5ec;
          min-height: 100vh;
        }
      `}</style>

      <div className="neumorphic-navbar rounded-2xl p-4 mx-6 mt-6 mb-8">
        <div className="flex justify-between items-center w-full">
          {/* 🔹 App Title */}
          <h1 className="text-2xl font-bold text-gray-700">WriteEase</h1>

          {/* 🔹 Nav Links in the Center */}
          <nav className="flex items-center gap-10 mx-auto">
            <Link
              to="/dashboard"
              className={`nav-link text-gray-700 font-medium hover:text-blue-600 transition ${
                location.pathname === "/dashboard" ? "text-blue-600" : ""
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/profile"
              className={`nav-link text-gray-700 font-medium hover:text-blue-600 transition ${
                location.pathname === "/profile" ? "text-blue-600" : ""
              }`}
            >
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="text-gray-700 font-medium hover:text-red-600 transition border-0 bg-transparent"
            >
              Logout
            </button>
          </nav>

          {/* 🔹 Add Note Button — Rightmost */}
          {(location.pathname === "/dashboard") && (
            <button
              data-testid="open-add-modal"
              onClick={handleAddNoteClick}
              className="neumorphic-square-btn text-gray-700"
            >
              Add Note
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NeumorphicNavbar;
