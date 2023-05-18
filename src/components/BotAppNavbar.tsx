import React from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const BotAppNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "#FFFFFF" }} href="#">
          Bot-App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Button>Add A Bot</Button>
          <Button>Delete A Bot</Button>
          <Button>Edit A Bot</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BotAppNavbar;
