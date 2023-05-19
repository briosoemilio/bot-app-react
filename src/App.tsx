import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import BotAppNavbar from "./components/BotAppNavbar";
import BotCardCarousel from "./components/BotCardCarousel";
import { mockBots } from "./mock/mockData";
import BotButtonGroup from "./components/BotButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { setAllBots } from "./slices/botSlice";
import { apiService } from "./services/Api.service";

function App() {
  // Redux Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    // get all bots and set to redux on first load
    apiService.getAllBots().then((res) => dispatch(setAllBots(res.data)));
  }, []);
  return (
    <div className="App">
      <BotAppNavbar />
      <Container className="d-flex my-5 flex-column align-items-center">
        <BotCardCarousel />
        <BotButtonGroup />
      </Container>
    </div>
  );
}

export default App;
