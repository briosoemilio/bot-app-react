import React from "react";
// Components
import BotCard from "./BotCard";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { viewLeft, viewRight } from "../slices/viewBotSlice";

// Utils
import { styles } from "../styles";

const BotCardCarousel = () => {
  // Redux State
  const viewBot = useSelector((state: any) => state.viewBot.value);
  const bots = useSelector((state: any) => state.bots.value);
  const dispatch = useDispatch();
  const onPressLeft = () => {
    if (viewBot === 0) return;
    dispatch(viewLeft());
  };
  const onPressRight = () => {
    if (viewBot === bots.length - 1) return;
    dispatch(viewRight());
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <IconButton sx={styles.carouselButtonStyle} onClick={() => onPressLeft()}>
        <ArrowBackIosIcon />
      </IconButton>
      <BotCard data={bots[viewBot]} />
      <IconButton
        sx={styles.carouselButtonStyle}
        onClick={() => onPressRight()}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default BotCardCarousel;
