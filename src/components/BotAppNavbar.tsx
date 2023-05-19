import React from "react";
// Components
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

// Utils
import { Images } from "../images";

const BotAppNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container className="justify-content-center">
        <Image
          src={Images.botsLogoTransparent}
          className="img-fluid"
          style={{ width: "100px" }}
        />
      </Container>
    </Navbar>
  );
};

export default BotAppNavbar;
