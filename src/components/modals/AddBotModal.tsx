import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styles } from "../../styles";
import InputComponent from "../InputComponent";
import SwitchComponent from "../SwitchComponent";

const AddBotModal = (props: any) => {
  const { showModal, setShowModal, bot } = props;
  const { botName } = bot;
  const [name, setName] = useState(botName);
  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <Box sx={styles.modalStyle}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          Add Bot
        </Typography>
        <InputComponent
          value={name}
          setValue={setName}
          label={"Name"}
          type={"text"}
        />
        <InputComponent
          value={name}
          setValue={setName}
          label={"Pupose"}
          type={"text"}
        />
        <InputComponent
          value={name}
          setValue={setName}
          label={"Attack"}
          type={"number"}
        />
        <InputComponent
          value={name}
          setValue={setName}
          label={"Defense"}
          type={"number"}
        />
        <InputComponent
          value={name}
          setValue={setName}
          label={"Health"}
          type={"number"}
        />
        <InputComponent
          value={name}
          setValue={setName}
          label={"Energy"}
          type={"number"}
        />
        <InputComponent
          value={name}
          setValue={setName}
          label={"Intelligence"}
          type={"number"}
        />
        <SwitchComponent />
      </Box>
    </Modal>
  );
};

export default AddBotModal;
