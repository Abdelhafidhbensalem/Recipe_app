import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    return (
        <div>
            <Navbar fixed="top"  collapseOnSelect expand="lg" bg="dark" variant="dark">
                <i className="fas fa-hamburger"></i>
                <Navbar.Brand href="/">We need a recipe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link  >About us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
