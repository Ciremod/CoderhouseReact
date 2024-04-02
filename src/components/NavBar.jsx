import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          CatLandia
        </Navbar.Brand>{" "}
        <Nav className="me-auto">
          <Nav.Link to="/category/alimentos" as={NavLink}>
            Alimentos
          </Nav.Link>
          <Nav.Link to="/category/camas" as={NavLink}>
            Camas y Cuchas
          </Nav.Link>
          <Nav.Link to="/category/juguetes" as={NavLink}>
            Juguetes Interactivos
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
