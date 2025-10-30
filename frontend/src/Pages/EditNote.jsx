import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import toast from "react-hot-toast";

const EditNote = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // get note from state
  const { note } = location.state || {};
  const [editedNote, setEditedNote] = useState({
    title: note?.title || "",
    content: note?.content || "",
  });

  if (!note) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">No note data found.</p>
      </div>
    );
  }

  // Handle save
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/notes/${note.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(editedNote),
      });

      if (!res.ok) throw new Error("Failed to update note");

toast("Note updated!", { style: { background: "#2193b0", color: "white" } });
      navigate("/dashboard");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          ✏️ Edit Your Note
        </h2>

        <form onSubmit={handleSave} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <div className="border rounded-lg overflow-hidden">
              <ReactQuill
                theme="snow"
                value={editedNote.title}
                onChange={(value) => setEditedNote({ ...editedNote, title: value })}
                className="bg-white"
                placeholder="Enter a title..."
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Content
            </label>
            <div className="border rounded-lg overflow-hidden">
              <ReactQuill
                theme="snow"
                value={editedNote.content}
                onChange={(value) =>
                  setEditedNote({ ...editedNote, content: value })
                }
                className="bg-white"
                placeholder="Write your note..."
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg shadow-md transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
