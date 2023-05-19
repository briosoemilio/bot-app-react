import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styles } from "../../styles";

const DeleteBotModal = (props: any) => {
  const { showModal, setShowModal } = props;
  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <Box sx={styles.modalStyle}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          Are you sure you want to delete bot?
        </Typography>
        <div className="d-flex justify-content-center mt-3">
          <Button variant="contained" color="success" className="mx-3">
            Yes
          </Button>
          <Button
            variant="contained"
            color="error"
            className="mx-3"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteBotModal;
