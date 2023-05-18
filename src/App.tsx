import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import BotAppNavbar from "./components/BotAppNavbar";
import BotCardCarousel from "./components/BotCardCarousel";
import { mockBots } from "./mock/mockData";

function App() {
  const botCards = mockBots;
  return (
    <div className="App">
      <BotAppNavbar />
      <Container className="d-flex justify-content-center my-5">
        <BotCardCarousel data={botCards} />
      </Container>
    </div>
  );
}

export default App;
