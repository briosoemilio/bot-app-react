import React from "react";
import BotCard from "./BotCard";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BotCardCarousel = (props: any) => {
  const { data } = props;
  return (
    <div className="d-flex w-50 justify-content-between align-items-center">
      <IconButton
        sx={{
          color: "#D4ADFC",
          height: "50px",
          width: "50px",
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <BotCard data={data[0]} />
      <IconButton
        sx={{
          color: "#D4ADFC",
          height: "50px",
          width: "50px",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default BotCardCarousel;
