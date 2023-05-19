import React from "react";

// Mui
import Switch from "@mui/base/Switch";
import { Typography } from "@mui/material";

// Utils
import { styles } from "../styles";

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
