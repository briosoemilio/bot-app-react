import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import BotAppNavbar from "./components/BotAppNavbar";
import BotCardCarousel from "./components/BotCardCarousel";
import { mockBots } from "./mock/mockData";
import BotButtonGroup from "./components/BotButtonGroup";

function App() {
  const botCards = mockBots;
  return (
    <div className="App">
      <BotAppNavbar />
      <Container className="d-flex my-5 flex-column align-items-center">
        <BotCardCarousel data={botCards} />
        <BotButtonGroup />
      </Container>
    </div>
  );
}

export default App;
