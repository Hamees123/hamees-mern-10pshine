// // import React, { useEffect, useState } from "react";
// // import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
// // import ReactQuill from "react-quill-new";
// // import "react-quill-new/dist/quill.snow.css";
// // import Button from 'react-bootstrap/Button';
// // import Modal from 'react-bootstrap/Modal';
// // import MyNavbar from "../components/MyNavbar";
// // import { Link } from "react-router-dom";
// // import { FaPlus } from "react-icons/fa";



// // const Notes_Dashboard = () => {
// //   const [notes, setNotes] = useState([]);
// //   const [newNote, setNewNote] = useState({ title: "", content: "" });
// //   const [editingNote, setEditingNote] = useState(null); // note being edited
// // const [show, setShow] = useState(false);

// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);
// //           const user =JSON.parse(localStorage.getItem("user"));

// //   // Fetch notes of logged-in user
// //   useEffect(() => {
// //     const fetchNotes = async () => {

// //       try {
// //         console.log("user Token:", user?.token);
// //         const res = await fetch("http://localhost:5000/notes", {
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${user?.token}`,
// //           },
// //         });
// //         const data = await res.json();
// //         console.log("Fetched data:", data);
// //         setNotes(data);
// //       } catch (err) {
// //         console.error("Failed to load notes:", err);
// //       }
// //     };

// //     fetchNotes();
// //   }, []);

// //   // Create a new note
// //   const handleAddNote = async (e) => {
// //     e.preventDefault();
// //     if (!newNote.title || !newNote.content) return alert("Fill all fields!");

// //     try {
// //       const res = await fetch("http://localhost:5000/notes", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${user.token}`,
// //         },
// //         body: JSON.stringify(newNote),
// //       });
// //       const data = await res.json();
// //       setNotes([data, ...notes]);
// //       setNewNote({ title: "", content: "" });
// //     } catch (err) {
// //       console.error("Add note failed:", err);
// //     }
// //   };

// //   // Delete note
// //   const handleDelete = async (id) => {
// //     try {
// //       await fetch(`http://localhost:5000/notes/${id}`, {
// //         method: "DELETE",
// //         headers: {
// //           Authorization: `Bearer ${user.token}`,
// //         },
// //       });
// //       setNotes(notes.filter((note) => note.id !== id));
// //     } catch (err) {
// //       console.error("Delete failed:", err);
// //     }
// //   };

// //   // Start editing a note
// //   const handleEdit = (note) => {
// //     setEditingNote({ ...note }); // copy note to state
// //   };

// //   // Save edited note
// //   const handleSaveEdit = async (id) => {
// //     try {
// //       const res = await fetch(`http://localhost:5000/notes/${id}`, {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${user.token}`,
// //         },
// //         body: JSON.stringify({
// //           title: editingNote.title,
// //           content: editingNote.content,
// //         }),
// //       });

// //       if (!res.ok) throw new Error("Failed to update note");
// //       const updatedNote = await res.json();

// //       // Update local state
// //       setNotes(notes.map((n) => (n.id === id ? updatedNote : n)));
// //       setEditingNote(null);
// //     } catch (err) {
// //       console.error("Edit failed:", err);
// //     }
// //   };

// //   // Cancel edit
// //   const handleCancelEdit = () => {
// //     setEditingNote(null);
// //   };

// //   return (





// // <>



    


    
// //     <div className="p-6 max-w-2xl mx-auto">
      
// //       {/* <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-2xl font-bold">Welcome, {token?.user.username}</h1>
// //         <button
          
// //           className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-red-600"
// //         >
// //           Logout
// //         </button>
// //       </div> */}

// //       {/* Add Note Form */}


// // <center>
// // <button data-testid="open-add-modal"
// //   onClick={handleShow}
// //   className="flex items-center mt-4 justify-center gap-2 border-2 border-dotted border-gray-500 rounded-full px-5 py-3 text-gray-800 hover:bg-gray-100 hover:border-gray-700 transition duration-200"
// // >
// //   <FaPlus className="text-lg" />
// //   <span className="font-medium">Add Note</span>
// // </button>
// // </center>

// // <br />
// // <br />
// // <br />
// // <br />
// // <br />
// // <br />
// //       <Modal show={show} onHide={handleClose}>
// //         <Modal.Header closeButton>
// //         </Modal.Header>
// //         <Modal.Body>
          
// //            <form
// //         onSubmit={handleAddNote}
// //         className="mb-6 bg-gray-100 p-4 rounded shadow"
// //       >
// //         <h2 className="text-lg font-semibold mb-2 text-black">Add a New Note</h2>
// //         <h2 className="text-lg font-semibold mb-2 text-black">Title</h2>
   

// // <ReactQuill
// //   theme="snow"
// //   value={newNote.title}
// //   onChange={(value) =>
// //     setNewNote({ ...newNote, title: value })
// //   }
// //   modules={{
// //     toolbar: [
// //       [{ header: [1, 2, false] }],
// //       ["bold", "italic", "underline", "strike"],
// //       [{ list: "ordered" }, { list: "bullet" }],
// //       ["link", "image"],
// //       ["clean"],
// //     ],
// //   }}
// //   placeholder="Edit your Title..."
// //   className="bg-white rounded mb-2"
// // />



// //         <h2 className="text-lg font-semibold mb-2 text-black">Content</h2>
// //      <ReactQuill
// //   theme="snow"
// //   value={newNote.content}
// //   onChange={(value) => setNewNote({ ...newNote, content: value })}
// //   modules={{
// //     toolbar: [
// //       [{ header: [1, 2, false] }],
// //       ["bold", "italic", "underline", "strike"],
// //       [{ list: "ordered" }, { list: "bullet" }],
// //       ["link", "image"],
// //       ["clean"],
// //     ],
// //   }}
// //   placeholder="Write your note here..."
// //   className="bg-white rounded mb-2"
// // />

// //         <button data-testid="submit-add-note"
// //           type="submit" onClick={handleClose}
// //           className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
// //         >
// //           Add Note
// //         </button>
// //       </form>
// //       </Modal.Body>
// //         <Modal.Footer>
          
          
// //         </Modal.Footer>
// //       </Modal>







// //       {/* Notes List */}
// //       <h2 className="text-lg font-semibold mb-2 mt-0">Your Notes</h2>
// //       {notes.length === 0 ? (
// //         <p className="text-gray-500">No notes found.</p>
// //       ) : (
// //         <div className="space-y-3">
// //           {Array.isArray(notes) && notes.map((note) => (
// //             <div
// //               key={note.id}
// //               className="border p-3 rounded shadow-sm flex justify-between items-start bg-white"
// //             >
// //               {editingNote && editingNote.id === note.id ? (
// //                 // Editing Mode
// //                 <div className="w-full">
                  
// // <h2>Title</h2>
// //  <ReactQuill
// //   theme="snow"
// //   value={editingNote.title}
// //   onChange={(value) =>
// //     setEditingNote({ ...editingNote, title: value })
// //   }
// //   modules={{
// //     toolbar: [
// //       [{ header: [1, 2, false] }],
// //       ["bold", "italic", "underline", "strike"],
// //       [{ list: "ordered" }, { list: "bullet" }],
// //       ["link", "image"],
// //       ["clean"],
// //     ],
// //   }}
// //   placeholder="Edit your Title..."
// //   className="bg-white rounded mb-2"
// // />

// // <h2>Content</h2>

// //                 <ReactQuill
// //   theme="snow"
// //   value={editingNote.content}
// //   onChange={(value) =>
// //     setEditingNote({ ...editingNote, content: value })
// //   }
// //   modules={{
// //     toolbar: [
// //       [{ header: [1, 2, false] }],
// //       ["bold", "italic", "underline", "strike"],
// //       [{ list: "ordered" }, { list: "bullet" }],
// //       ["link", "image"],
// //       ["clean"],
// //     ],
// //   }}
// //   placeholder="Edit your note..."
// //   className="bg-white rounded mb-2"
// // />
// //                   <div className="flex gap-2">
// //                     <button
// //                       onClick={() => handleSaveEdit(note.id)}
// //                       className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-600 flex items-center gap-1"
// //                     >
// //                       <FaSave /> Save
// //                     </button>
// //                     <button
// //                       onClick={handleCancelEdit}
// //                       className="bg-gray-400 text-black px-3 py-1 rounded hover:bg-gray-500 flex items-center gap-1"
// //                     >
// //                       <FaTimes /> Cancel
// //                     </button>
// //                   </div>
// //                 </div>
// //               ) : (
// //                 // Normal View
// //                 <>
// //                   <div>
// //                      <h3 className="text-sm text-black prose max-w-none"
// //     dangerouslySetInnerHTML={{ __html: note.title }}>
    
// //    </h3>
// //  <div
// //     className="text-sm text-black prose max-w-none"
// //     dangerouslySetInnerHTML={{ __html: note.content }}
// //   />                  </div>
// //                   <div className="flex gap-2">
// //                    <Link to="/edit" state={{ note }}>
// //   <FaEdit className="text-blue-500 hover:text-blue-700" />
// // </Link>
// //                     <button onClick={() => handleDelete(note.id)}>
// //                       <FaTrash className="text-red-500 hover:text-red-700" />
// //                     </button>
// //                   </div>
// //                 </>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //  </>
// //   );
// // };

// // export default Notes_Dashboard;





// import React, { useEffect, useState } from "react";
// import { FaEdit, FaTrash, FaSave, FaTimes, FaPlus, FaSearch } from "react-icons/fa";
// import ReactQuill from "react-quill-new";
// import "react-quill-new/dist/quill.snow.css";
// import MyNavbar from "../components/MyNavbar";
// import { Link } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";
// import toast from "react-hot-toast";

// const Notes_Dashboard = () => {
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState({ title: "", content: "" });
//   const [editingNote, setEditingNote] = useState(null);
//   const [show, setShow] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const openModalHandler = () => setShow(true);
//     window.addEventListener("openAddNoteModal", openModalHandler);
//     return () => window.removeEventListener("openAddNoteModal", openModalHandler);
//   }, []);

//   // Fetch notes
//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/notes", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${user?.token}`,
//           },
//         });
//         const data = await res.json();
//         setNotes(data);
//       } catch (err) {
//         console.error("Failed to load notes:", err);
//       }
//     };
//     fetchNotes();
//   }, []);

//   // Add note
//   const handleAddNote = async (e) => {
//     e.preventDefault();
//     if (!newNote.title || !newNote.content) return alert("Fill all fields!");
//     try {
//       const res = await fetch("http://localhost:5000/notes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${user.token}`,
//         },
//         body: JSON.stringify(newNote),
//       });
//       const data = await res.json();
//       toast.success("New Note Added");
//       setNotes([data, ...notes]);
//       setNewNote({ title: "", content: "" });
//       handleClose();
//     } catch (err) {
//       console.error("Add note failed:", err);
//     }
//   };

//   // Delete note
//   const handleDelete = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/notes/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${user.token}` },
//       });
//       setNotes(notes.filter((note) => note.id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//     }
//   };

//   // Edit + Save + Cancel
//   const handleEdit = (note) => setEditingNote({ ...note });
//   const handleSaveEdit = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:5000/notes/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${user.token}`,
//         },
//         body: JSON.stringify({
//           title: editingNote.title,
//           content: editingNote.content,
//         }),
//       });
//       if (!res.ok) throw new Error("Failed to update note");
//       const updatedNote = await res.json();
//       setNotes(notes.map((n) => (n.id === id ? updatedNote : n)));
//       setEditingNote(null);
//     } catch (err) {
//       console.error("Edit failed:", err);
//     }
//   };
//   const handleCancelEdit = () => setEditingNote(null);

//   // Filtered notes
//   const filteredNotes = Array.isArray(notes)
//     ? notes.filter((note) => {
//         const titleText = note.title.replace(/<[^>]*>/g, "").toLowerCase();
//         const contentText = note.content.replace(/<[^>]*>/g, "").toLowerCase();
//         const query = searchQuery.toLowerCase();
//         return titleText.includes(query) || contentText.includes(query);
//       })
//     : [];

//   return (
//     <>
//       <style>{`
//         body {
//           background: #e0e5ec;
//           min-height: 100vh;
//           font-family: 'Inter', sans-serif;
//           color: #333;
//         }

//         /* 🔍 Search Input */
//         .neumorphic-input {
//           background: #e0e5ec;
//           border-radius: 50px;
//           box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6),
//                       inset -6px -6px 12px rgba(255,255,255,0.5);
//           transition: all 0.3s ease;
//           border: none;
//         }
//         .neumorphic-input:focus {
//           outline: none;
//           box-shadow: inset 2px 2px 5px rgba(163,177,198,0.6),
//                       inset -2px -2px 5px rgba(255,255,255,0.5);
//         }

//         /* 🗒️ Card */
//         .neumorphic-card {
//           background: #e0e5ec;
//           border-radius: 20px;
//           box-shadow: 9px 9px 16px rgba(163,177,198,0.6),
//                       -9px -9px 16px rgba(255,255,255,0.5);
//           transition: all 0.3s ease;
//         }
//         .neumorphic-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 6px 6px 12px rgba(163,177,198,0.5),
//                       -6px -6px 12px rgba(255,255,255,0.6);
//         }

//         /* ✨ Buttons */
//         .neumorphic-button {
//           background: #e0e5ec;
//           box-shadow: 6px 6px 12px rgba(163,177,198,0.6),
//                       -6px -6px 12px rgba(255,255,255,0.5);
//           transition: all 0.3s ease;
//           border-radius: 50%;
//           width: 42px;
//           height: 42px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .neumorphic-button:hover {
//           box-shadow: 4px 4px 8px rgba(163,177,198,0.6),
//                       -4px -4px 8px rgba(255,255,255,0.5);
//           transform: scale(1.05);
//         }

//         /* 🪄 Modal */
//         .modal-content {
//           border-radius: 20px !important;
//           background: #e0e5ec !important;
//           box-shadow: 9px 9px 16px rgba(163,177,198,0.6),
//                       -9px -9px 16px rgba(255,255,255,0.5);
//           border: none !important;
//         }
//       `}</style>

//       <div className="px-6 max-w-7xl mx-auto">
//         {/* 🔍 Search Bar */}
//         <div className="mb-8 flex justify-center">
//           <div className="relative w-full max-w-2xl">
//             <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search notes..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="neumorphic-input w-full pl-12 pr-4 py-3 text-gray-700 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* 🧾 Modal for Adding Note */}
//         <Modal show={show} onHide={handleClose} centered>
//           <Modal.Header closeButton>
//             <Modal.Title className="text-gray-800 font-semibold">
//               Create a New Note
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <form onSubmit={handleAddNote}>
//               <h2 className="text-md font-semibold mb-2 text-gray-800">Title</h2>
//               <ReactQuill
//                 theme="snow"
//                 value={newNote.title}
//                 onChange={(e) => setNewNote({ ...newNote, title: e })}
//                 className="bg-white mb-4 rounded-lg"
//                 placeholder="Enter note title..."
//               />

//               <h2 className="text-md font-semibold mb-2 text-gray-800">Content</h2>
//               <ReactQuill
//                 theme="snow"
//                 value={newNote.content}
//                 onChange={(e) => setNewNote({ ...newNote, content: e })}
//                 className="bg-white mb-6 rounded-lg"
//                 placeholder="Write your note here..."
//               />

//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 shadow"
//               >
//                 Add Note
//               </button>
//             </form>
//           </Modal.Body>
//         </Modal>

//         {/* 🗒️ Notes Grid */}
//         <h2 className="text-xl font-semibold mb-6 text-gray-700">Your Notes</h2>
//         {filteredNotes.length === 0 ? (
//           <p className="text-gray-500 text-center">
//             {searchQuery ? "No notes found matching your search." : "No notes found."}
//           </p>
//         ) : (
//           <div className="flex flex-wrap gap-6">
//             {filteredNotes.map((note) => (
//               <div
//                 key={note.id}
//                 className="neumorphic-card p-5 w-full md:w-[calc(50%-0.75rem)]"
//               >
//                 {editingNote && editingNote.id === note.id ? (
//                   <div className="w-full">
//                     <h2 className="text-gray-700 font-semibold mb-2">Edit Title</h2>
//                     <ReactQuill
//                       theme="snow"
//                       value={editingNote.title}
//                       onChange={(v) => setEditingNote({ ...editingNote, title: v })}
//                       className="bg-white mb-4 rounded-lg"
//                     />
//                     <h2 className="text-gray-700 font-semibold mb-2">Edit Content</h2>
//                     <ReactQuill
//                       theme="snow"
//                       value={editingNote.content}
//                       onChange={(v) => setEditingNote({ ...editingNote, content: v })}
//                       className="bg-white mb-4 rounded-lg"
//                     />
//                     <div className="flex gap-2 mt-3">
//                       <button
//                         onClick={() => handleSaveEdit(note.id)}
//                         className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 flex items-center gap-1"
//                       >
//                         <FaSave /> Save
//                       </button>
//                       <button
//                         onClick={handleCancelEdit}
//                         className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500 flex items-center gap-1"
//                       >
//                         <FaTimes /> Cancel
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex flex-col h-full">
//                     <div className="flex-1 mb-4">
//                       <h3
//                         className="text-base font-semibold text-gray-800 mb-3 prose max-w-none"
//                         dangerouslySetInnerHTML={{ __html: note.title }}
//                       />
//                       <div
//                         className="text-sm text-gray-600 prose max-w-none line-clamp-4"
//                         dangerouslySetInnerHTML={{ __html: note.content }}
//                       />
//                     </div>
//                     <div className="flex gap-3 justify-end border-t border-gray-300 pt-3">
//                       <Link to="/edit" state={{ note }}>
//                         <button className="neumorphic-button">
//                           <FaEdit className="text-blue-600" />
//                         </button>
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(note.id)}
//                         className="neumorphic-button"
//                       >
//                         <FaTrash className="text-red-600" />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Notes_Dashboard;




import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes, FaPlus, FaSearch } from "react-icons/fa";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import MyNavbar from "../components/MyNavbar";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

const Notes_Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [editingNote, setEditingNote] = useState(null);
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // 🆕 Delete confirmation modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const openModalHandler = () => setShow(true);
    window.addEventListener("openAddNoteModal", openModalHandler);
    return () => window.removeEventListener("openAddNoteModal", openModalHandler);
  }, []);

  // Fetch notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:5000/notes", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        });
        const data = await res.json();
        setNotes(data);
      } catch (err) {
        console.error("Failed to load notes:", err);
      }
    };
    fetchNotes();
  }, []);

  // Add note
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
      toast.success("New Note Added");
      setNotes([data, ...notes]);
      setNewNote({ title: "", content: "" });
      handleClose();
    } catch (err) {
      console.error("Add note failed:", err);
    }
  };

  // Delete note
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:5000/notes/${noteToDelete.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setNotes(notes.filter((note) => note.id !== noteToDelete.id));
      toast.success("Note deleted");
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setShowDeleteModal(false);
      setNoteToDelete(null);
    }
  };

  // Edit + Save + Cancel
  const handleEdit = (note) => setEditingNote({ ...note });
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
      setNotes(notes.map((n) => (n.id === id ? updatedNote : n)));
      setEditingNote(null);
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };
  const handleCancelEdit = () => setEditingNote(null);

  // Filtered notes
  const filteredNotes = Array.isArray(notes)
    ? notes.filter((note) => {
        const titleText = note.title.replace(/<[^>]*>/g, "").toLowerCase();
        const contentText = note.content.replace(/<[^>]*>/g, "").toLowerCase();
        const query = searchQuery.toLowerCase();
        return titleText.includes(query) || contentText.includes(query);
      })
    : [];

  return (
    <>
      <style>{`
        body {
          background: #e0e5ec;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          color: #333;
        }
        .neumorphic-input {
          background: #e0e5ec;
          border-radius: 50px;
          box-shadow: inset 6px 6px 12px rgba(163,177,198,0.6),
                      inset -6px -6px 12px rgba(255,255,255,0.5);
          border: none;
        }
        .neumorphic-card {
          background: #e0e5ec;
          border-radius: 20px;
          box-shadow: 9px 9px 16px rgba(163,177,198,0.6),
                      -9px -9px 16px rgba(255,255,255,0.5);
          transition: all 0.3s ease;
        }
        .neumorphic-button {
          background: #e0e5ec;
          box-shadow: 6px 6px 12px rgba(163,177,198,0.6),
                      -6px -6px 12px rgba(255,255,255,0.5);
          border-radius: 50%;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          border-radius: 20px !important;
          background: #e0e5ec !important;
          box-shadow: 9px 9px 16px rgba(163,177,198,0.6),
                      -9px -9px 16px rgba(255,255,255,0.5);
          border: none !important;
        }
      `}</style>

      <div className="px-6 max-w-7xl mx-auto">
        {/* 🔍 Search Bar */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="neumorphic-input w-full pl-12 pr-4 py-3 text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        {/* 🧾 Modal for Adding Note */}
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-gray-800 font-semibold">
              Create a New Note
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleAddNote}>
              <h2 className="text-md font-semibold mb-2 text-gray-800">Title</h2>
              <ReactQuill
                theme="snow"
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e })}
                className="bg-white mb-4 rounded-lg"
                placeholder="Enter note title..."
              />
              <h2 className="text-md font-semibold mb-2 text-gray-800">Content</h2>
              <ReactQuill
                theme="snow"
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e })}
                className="bg-white mb-6 rounded-lg"
                placeholder="Write your note here..."
              />
              <button 
              data-testid="submit-add-note"
               onClick={handleClose}
                type="submit"
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 shadow"
              >
                Add a Note
              </button>
            </form>
          </Modal.Body>
        </Modal>

        {/* 🗑️ Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              Are you sure you want to delete this note? This action cannot be undone.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              No
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Yes, Delete
            </button>
          </Modal.Footer>
        </Modal>

        {/* 🗒️ Notes Grid */}
       <center> <h2 className="text-xl  font-semibold mb-6 text-gray-700">Your Notes</h2></center>
        {filteredNotes.length === 0 ? (
          <p className="text-gray-500 text-center">
            {searchQuery ? "No notes found matching your search." : "No notes found."}
          </p>
        ) : (
          <div className="flex flex-wrap gap-6">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="neumorphic-card p-5 w-full md:w-[calc(50%-0.75rem)]"
              >
                {editingNote && editingNote.id === note.id ? (
                  <div className="w-full">
                    <ReactQuill
                      theme="snow"
                      value={editingNote.title}
                      onChange={(v) => setEditingNote({ ...editingNote, title: v })}
                      className="bg-white mb-4 rounded-lg"
                    />
                    <ReactQuill
                      theme="snow"
                      value={editingNote.content}
                      onChange={(v) => setEditingNote({ ...editingNote, content: v })}
                      className="bg-white mb-4 rounded-lg"
                    />
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => handleSaveEdit(note.id)}
                        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 flex items-center gap-1"
                      >
                        <FaSave /> Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500 flex items-center gap-1"
                      >
                        <FaTimes /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <div className="flex-1 mb-4">
                      <h3
                        className="text-base font-semibold text-gray-800 mb-3 prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: note.title }}
                      />
                      <div
                        className="text-sm text-gray-600 prose max-w-none line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: note.content }}
                      />
                    </div>
                    <div className="flex gap-3 justify-end border-t border-gray-300 pt-3">
                      <Link to="/edit" state={{ note }}>
                        <button className="neumorphic-button">
                          <FaEdit className="text-blue-600" />
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setNoteToDelete(note);
                          setShowDeleteModal(true);
                        }}
                        className="neumorphic-button"
                      >
                        <FaTrash className="text-red-600" />
                      </button>
                    </div>
                  </div>
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
