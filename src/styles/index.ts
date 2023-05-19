import { styled } from "@mui/system";
import { switchClasses } from "@mui/base/Switch";
const blue = {
  500: "#007FFF",
};

const grey = {
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
};

export const styles = {
  modalStyle: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },

  rootSwitchStyle: styled("span")(
    ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 10px;
    cursor: pointer;
  
    &.${switchClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    & .${switchClasses.track} {
      background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
      border-radius: 16px;
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  
    & .${switchClasses.thumb} {
      display: block;
      width: 16px;
      height: 16px;
      top: 4px;
      left: 4px;
      border-radius: 16px;
      background-color: #fff;
      position: relative;
      
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
    }
  
    &.${switchClasses.focusVisible} .${switchClasses.thumb} {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.${switchClasses.checked} {
      .${switchClasses.thumb} {
        left: 20px;
        top: 4px;
        background-color: #fff;
      }
  
      .${switchClasses.track} {
        background: ${blue[500]};
      }
    }
  
    & .${switchClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      margin: 0;
    }
    `
  ),

  carouselButtonStyle: {
    color: "#D4ADFC",
    height: "50px",
    width: "50px",
  },
};
