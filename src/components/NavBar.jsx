import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CatLandia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Alimentos</Nav.Link>
            <Nav.Link href="#features">Camas y Cuchas</Nav.Link>
            <Nav.Link href="#pricing">Juguetes Interactivos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
} ; 