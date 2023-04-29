import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Components/Home";
import Shoes from "./Components/Shoes";
import AddShoe from "./Components/AddShoe";
import Shoe from "./Components/Shoe";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Shoe Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shoes">
              Shoes
            </Nav.Link>
            <Nav.Link as={Link} to="/shoes/add">
              Add Shoe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/shoes/add" element={<AddShoe />} />
        <Route path="/shoes/:shoeId" element={<Shoe />} />
      </Routes>
    </Router>
  );
}

export default App;
