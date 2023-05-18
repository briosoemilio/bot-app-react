import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import BotAppNavbar from "./components/BotAppNavbar";
import BotCard from "./components/BotCard";

function App() {
  return (
    <div className="App">
      <BotAppNavbar />
      <Container className="d-flex justify-content-center my-5">
        <BotCard />
      </Container>
    </div>
  );
}

export default App;
