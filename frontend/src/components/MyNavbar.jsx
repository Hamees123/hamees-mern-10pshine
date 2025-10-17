import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function MyNavbar() {

  // 🔹 Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

const user = localStorage.getItem("user");

  return (
    
     (user?
        <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Notes</Navbar.Brand>
      <Nav className="mx-auto d-flex align-items-center">
        <Link to="/dashboard" className="text-white mx-3 text-decoration-none">
          Home
        </Link>
        <Link to="/profile" className="text-white mx-3 text-decoration-none">
          Profile
        </Link>
        <button onClick={handleLogout} className="btn btn-light mx-3">
          Logout
        </button>
      </Nav>
    </Container>
  </Navbar>
     :"")
    
  );
}

export default MyNavbar;