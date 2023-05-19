import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styles } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteBot } from "../../slices/botSlice";
import { apiService } from "../../services/Api.service";
import { setViewBot } from "../../slices/viewBotSlice";

const DeleteBotModal = (props: any) => {
  const { showModal, setShowModal, bot } = props;
  const dispatch = useDispatch();
  const bots = useSelector((state: any) => state.bots.value);

  const handleDeleteBot = async () => {
    const botId = bot.id;
    // Delete Bot Redux State
    dispatch(deleteBot(botId));

    // Adjust View Bot To Next Bot
    dispatch(setViewBot(bots.length - 2));

    // Delete Bot DB Side
    await apiService.deleteBot(botId);

    // Close modal
    setShowModal(false);
  };

  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <Box sx={styles.modalStyle}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          Are you sure you want to delete bot?
        </Typography>
        <div className="d-flex justify-content-center mt-3">
          <Button
            variant="contained"
            color="success"
            className="mx-3"
            onClick={() => handleDeleteBot()}
          >
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
