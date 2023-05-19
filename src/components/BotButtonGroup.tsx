import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditBotModal from "./modals/EditBotModal";
import AddBotModal from "./modals/AddBotModal";
import DeleteBotModal from "./modals/DeleteBotModal";
import { mockBots } from "../mock/mockData";

const BotButtonGroup = () => {
  const bots = mockBots;
  const [showEditBotModal, setShowEditBotModal] = useState(false);
  const [showAddBotModal, setShowAddBotModal] = useState(false);
  const [showDeleteBotModal, setShowDeleteBotModal] = useState(false);
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        className="mt-5"
      >
        <Button color="warning" onClick={() => setShowEditBotModal(true)}>
          EDIT
        </Button>
        <Button color="success" onClick={() => setShowAddBotModal(true)}>
          ADD
        </Button>
        <Button color="error" onClick={() => setShowDeleteBotModal(true)}>
          DELETE
        </Button>
      </ButtonGroup>
      <EditBotModal
        showModal={showEditBotModal}
        setShowModal={setShowEditBotModal}
        bot={bots[0]}
      />
      <AddBotModal
        showModal={showAddBotModal}
        setShowModal={setShowAddBotModal}
        bot={bots[0]}
      />
      <DeleteBotModal
        showModal={showDeleteBotModal}
        setShowModal={setShowDeleteBotModal}
      />
    </div>
  );
};

export default BotButtonGroup;
