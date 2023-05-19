import React from "react";
// Components
import Input from "@mui/base/Input";

const InputComponent = (props: any) => {
  const { value, setValue, label, type, showError } = props;
  return (
    <Input
      value={value}
      name={label}
      startAdornment={`${label} : `}
      autoFocus={false}
      className="my-2"
      onChange={(e) => {
        if (type === "number") {
          const parsedValue = parseInt(e.target.value);
          setValue(parsedValue);
        } else {
          setValue(e.target.value);
        }
      }}
      style={{ flex: 1 }}
      type={type}
      error={showError}
      endAdornment={showError ? " BOT EXISTS" : ""}
    />
  );
};

export default InputComponent;
