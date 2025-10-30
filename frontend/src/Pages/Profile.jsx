import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Load stored user
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsedUser = JSON.parse(stored);
      setUser(parsedUser);
      setFormData({
        username: parsedUser.user?.username || "",
        email: parsedUser.user?.email || "",
        password: "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!user) return alert("User not logged in!");

    try {
      const res = await fetch(
        `http://localhost:5000/auth/updateUser/${user.user?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) return alert("Failed to update profile");
      const updatedUser = await res.json();

      // Update local storage
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          user: {
            ...user.user,
            username: updatedUser.username,
            email: updatedUser.email,
          },
        })
      );

      alert("Profile updated successfully!");
      setIsEditing(false);
      navigate("/dashboard");
    } catch (error) {
      console.error("Update error:", error);
      alert("Error updating profile");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      {!isEditing ? (
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center transition-all">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User Avatar"
            className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-500"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            {formData.username}
          </h2>
          <p className="text-gray-600 mb-1">{formData.email}</p>
          <p className="text-gray-400 text-sm mb-4">Password: ********</p>

          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Edit Your Profile
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 transition-all"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Edit Profile
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Username:
            </label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              New Password:
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              placeholder="Leave blank to keep old password"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
