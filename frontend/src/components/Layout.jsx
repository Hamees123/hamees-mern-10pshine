import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col p-5">
        <h2
          className="text-2xl font-bold mb-8 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          Notes App
        </h2>

        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="block px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            Profile
          </Link>
        </nav>

        <button
          className="mt-auto bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
