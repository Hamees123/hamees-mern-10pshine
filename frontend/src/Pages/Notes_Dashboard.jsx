import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyNavbar from "../components/MyNavbar";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";



const Notes_Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [editingNote, setEditingNote] = useState(null); // note being edited
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
          const user =JSON.parse(localStorage.getItem("user"));

  // Fetch notes of logged-in user
  useEffect(() => {
    const fetchNotes = async () => {

      try {
        console.log("user Token:", user?.token);
        const res = await fetch("http://localhost:5000/notes", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        });
        const data = await res.json();
        console.log("Fetched data:", data);
        setNotes(data);
      } catch (err) {
        console.error("Failed to load notes:", err);
      }
    };

    fetchNotes();
  }, []);

  // Create a new note
  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newNote.title || !newNote.content) return alert("Fill all fields!");

    try {
      const res = await fetch("http://localhost:5000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(newNote),
      });
      const data = await res.json();
      setNotes([data, ...notes]);
      setNewNote({ title: "", content: "" });
    } catch (err) {
      console.error("Add note failed:", err);
    }
  };

  // Delete note
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/notes/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setNotes(notes.filter((note) => note.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Start editing a note
  const handleEdit = (note) => {
    setEditingNote({ ...note }); // copy note to state
  };

  // Save edited note
  const handleSaveEdit = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          title: editingNote.title,
          content: editingNote.content,
        }),
      });

      if (!res.ok) throw new Error("Failed to update note");
      const updatedNote = await res.json();

      // Update local state
      setNotes(notes.map((n) => (n.id === id ? updatedNote : n)));
      setEditingNote(null);
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingNote(null);
  };

  return (





<>



    


    
    <div className="p-6 max-w-2xl mx-auto">
      
      {/* <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, {token?.user.username}</h1>
        <button
          
          className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div> */}

      {/* Add Note Form */}


<center>
<button
  onClick={handleShow}
  className="flex items-center justify-center gap-2 border-2 border-dotted border-gray-500 rounded-full px-5 py-3 text-gray-800 hover:bg-gray-100 hover:border-gray-700 transition duration-200"
>
  <FaPlus className="text-lg" />
  <span className="font-medium">Add Note</span>
</button>
</center>

<br />
<br />
<br />
<br />
<br />
<br />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          
           <form
        onSubmit={handleAddNote}
        className="mb-6 bg-gray-100 p-4 rounded shadow"
      >
        <h2 className="text-lg font-semibold mb-2 text-black">Add a New Note</h2>
        <h2 className="text-lg font-semibold mb-2 text-black">Title</h2>
   

<ReactQuill
  theme="snow"
  value={newNote.title}
  onChange={(value) =>
    setNewNote({ ...newNote, title: value })
  }
  modules={{
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  }}
  placeholder="Edit your Title..."
  className="bg-white rounded mb-2"
/>



        <h2 className="text-lg font-semibold mb-2 text-black">Content</h2>
     <ReactQuill
  theme="snow"
  value={newNote.content}
  onChange={(value) => setNewNote({ ...newNote, content: value })}
  modules={{
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  }}
  placeholder="Write your note here..."
  className="bg-white rounded mb-2"
/>

        <button
          type="submit" onClick={handleClose}
          className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Note
        </button>
      </form>
      </Modal.Body>
        <Modal.Footer>
          
          
        </Modal.Footer>
      </Modal>







      {/* Notes List */}
      <h2 className="text-lg font-semibold mb-2">Your Notes</h2>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes found.</p>
      ) : (
        <div className="space-y-3">
          {Array.isArray(notes) && notes.map((note) => (
            <div
              key={note.id}
              className="border p-3 rounded shadow-sm flex justify-between items-start bg-white"
            >
              {editingNote && editingNote.id === note.id ? (
                // Editing Mode
                <div className="w-full">
                  
<h2>Title</h2>
 <ReactQuill
  theme="snow"
  value={editingNote.title}
  onChange={(value) =>
    setEditingNote({ ...editingNote, title: value })
  }
  modules={{
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  }}
  placeholder="Edit your Title..."
  className="bg-white rounded mb-2"
/>

<h2>Content</h2>

                <ReactQuill
  theme="snow"
  value={editingNote.content}
  onChange={(value) =>
    setEditingNote({ ...editingNote, content: value })
  }
  modules={{
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  }}
  placeholder="Edit your note..."
  className="bg-white rounded mb-2"
/>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveEdit(note.id)}
                      className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-600 flex items-center gap-1"
                    >
                      <FaSave /> Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-400 text-black px-3 py-1 rounded hover:bg-gray-500 flex items-center gap-1"
                    >
                      <FaTimes /> Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // Normal View
                <>
                  <div>
                     <h3 className="text-sm text-black prose max-w-none"
    dangerouslySetInnerHTML={{ __html: note.title }}>
    
   </h3>
 <div
    className="text-sm text-black prose max-w-none"
    dangerouslySetInnerHTML={{ __html: note.content }}
  />                  </div>
                  <div className="flex gap-2">
                   <Link to="/edit" state={{ note }}>
  <FaEdit className="text-blue-500 hover:text-blue-700" />
</Link>
                    <button onClick={() => handleDelete(note.id)}>
                      <FaTrash className="text-red-500 hover:text-red-700" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
 </>
  );
};

export default Notes_Dashboard;
