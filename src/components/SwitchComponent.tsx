import React from "react";
import Switch, { switchClasses } from "@mui/base/Switch";
import { styles } from "../styles";
import { Typography } from "@mui/material";

const SwitchComponent = (props: any) => {
  const { value, setValue } = props;
  const label = { slotProps: { input: { "aria-label": "Demo switch" } } };
  return (
    <div className="d-flex align-items-center">
      <Typography>Rare:</Typography>
      <Switch
        checked={value}
        onChange={() => setValue(!value)}
        slots={{
          root: styles.rootSwitchStyle,
        }}
        {...label}
      />
    </div>
  );
};

export default SwitchComponent;
