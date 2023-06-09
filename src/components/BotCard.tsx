import React, { useState } from "react";

// React Spring
import { useSpring, animated } from "@react-spring/web";

// Mui Components
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"; // health
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment"; // attack
import ShieldIcon from "@mui/icons-material/Shield"; // defense
import PsychologyIcon from "@mui/icons-material/Psychology"; // intelligence
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull"; // energy

// Helpers
import { Images } from "../images";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { apiService } from "../services/Api.service";
import { useDispatch } from "react-redux";
import { favoriteBot } from "../slices/botSlice";

const BotStatContainer = (props: any) => {
  const { statName, statValue, IconComponent } = props;
  return (
    <div className="d-flex justify-content-between mx-5 my-1">
      <div className="d-flex">
        {IconComponent}
        <Typography style={{ fontWeight: "bold" }}>{statName}:</Typography>
      </div>
      <Typography style={{ fontWeight: "bold" }}>{statValue}</Typography>
    </div>
  );
};

const BotCard = (props: any) => {
  const dispatch = useDispatch();
  const { data } = props;
  const id = data?.id;
  const name = data?.name;
  const purpose = data?.purpose;
  const attack = data?.attack;
  const defense = data?.defense;
  const health = data?.health;
  const energy = data?.energy;
  const intelligence = data?.intelligence;
  const picture = data?.picture;
  const isRare = data?.isRare;
  const isFavorite = data?.isFavorite;

  const [springs, api] = useSpring(() => ({
    from: { display: "none" },
  }));

  const handleOnMouseEnter = () => {
    api.start({
      from: { display: "none" },
      to: { display: "flex" },
      reset: true,
    });
  };

  const handleOnMouseLeave = () => {
    api.start({
      from: { display: "flex" },
      to: { display: "none" },
    });
  };

  const handleFavoriteClick = async () => {
    dispatch(favoriteBot(id)); // set redux state to immediately render ui changes

    // Call Update Bot API
    await apiService.updateBot(id, { isFavorite: !isFavorite });
  };

  const RenderBotStats = () => {
    return (
      <animated.div
        className="flex-column w-100 h-100 justify-content-center"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          ...springs,
        }}
      >
        <BotStatContainer
          statName={"Health"}
          statValue={health}
          IconComponent={<LocalHospitalIcon />}
        />
        <BotStatContainer
          statName={"Attack"}
          statValue={attack}
          IconComponent={<LocalFireDepartmentIcon />}
        />
        <BotStatContainer
          statName={"Defense"}
          statValue={defense}
          IconComponent={<ShieldIcon />}
        />
        <BotStatContainer
          statName={"Intelligence"}
          statValue={intelligence}
          IconComponent={<PsychologyIcon />}
        />
        <BotStatContainer
          statName={"Energy"}
          statValue={energy}
          IconComponent={<BatteryChargingFullIcon />}
        />
      </animated.div>
    );
  };

  const pictureUrl =
    id === 1
      ? Images.optimusPrimeAvatar
      : `data:image/svg+xml,${encodeURIComponent(picture)}`;
  return (
    <Card
      sx={{ width: "280px" }}
      style={{
        backgroundColor: "#D4ADFC",
        border: "10px solid #5C469C",
        position: "relative",
      }}
      onMouseEnter={() => handleOnMouseEnter()}
      onMouseLeave={() => handleOnMouseLeave()}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "#1D267D" }}>#{id}</Avatar>}
        action={
          <IconButton
            aria-label="add to favorites"
            style={{ zIndex: 1, color: "#1D267" }}
            onClick={() => handleFavoriteClick()}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlined />}
          </IconButton>
        }
        title={name}
        titleTypographyProps={{
          fontSize: 20,
          textOverflow: "ellipsis",
          fontWeight: "bold",
          maxWidth: 130,
        }}
        color="#1D267D"
      />
      {RenderBotStats()}
      <CardMedia component="img" src={pictureUrl} />
      <CardContent>
        <Typography variant="body2" color="#1D267D" fontSize={18}>
          {purpose}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BotCard;
