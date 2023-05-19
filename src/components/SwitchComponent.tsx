import React from "react";
import Switch, { switchClasses } from "@mui/base/Switch";
import { styles } from "../styles";
import { Typography } from "@mui/material";

const SwitchComponent = () => {
  const label = { slotProps: { input: { "aria-label": "Demo switch" } } };
  return (
    <div className="d-flex align-items-center">
      <Typography>Rare:</Typography>
      <Switch
        slots={{
          root: styles.rootSwitchStyle,
        }}
        {...label}
        defaultChecked
      />
    </div>
  );
};

export default SwitchComponent;
