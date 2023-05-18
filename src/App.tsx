import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import BotAppNavbar from "./components/BotAppNavbar";

function App() {
  return (
    <div className="App">
      <BotAppNavbar />
      <Container></Container>
    </div>
  );
}

export default App;
