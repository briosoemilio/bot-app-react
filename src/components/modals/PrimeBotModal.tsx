import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styles } from "../../styles";

const PrimeBotModal = (props: any) => {
  const { showModal, setShowModal } = props;
  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <Box sx={styles.modalStyle}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          You cannot delete nor edit the Prime Bot
        </Typography>
      </Box>
    </Modal>
  );
};

export default PrimeBotModal;
