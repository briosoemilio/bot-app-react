import React from "react";

import Input from "@mui/base/Input";

const InputComponent = (props: any) => {
  const { value, setValue, label, type } = props;
  return (
    <Input
      value={value}
      name={label}
      startAdornment={`${label} : `}
      autoFocus={false}
      className="my-2"
      onChange={(e) => setValue(e)}
      style={{ flex: 1 }}
      type={type}
    />
  );
};

export default InputComponent;
