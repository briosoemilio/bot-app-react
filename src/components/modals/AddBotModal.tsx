import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styles } from "../../styles";

const AddBotModal = (props: any) => {
  const { showModal, setShowModal } = props;
  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <Box sx={styles.modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Bot Modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default AddBotModal;
