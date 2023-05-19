import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditBotModal from "./modals/EditBotModal";
import AddBotModal from "./modals/AddBotModal";
import DeleteBotModal from "./modals/DeleteBotModal";
import { useSelector } from "react-redux";
import PrimeBotModal from "./modals/PrimeBotModal";

const BotButtonGroup = () => {
  const [showEditBotModal, setShowEditBotModal] = useState(false);
  const [showAddBotModal, setShowAddBotModal] = useState(false);
  const [showDeleteBotModal, setShowDeleteBotModal] = useState(false);
  const [showPrimeBotModal, setShowPrimeBotModal] = useState(false);
  const viewBot = useSelector((state: any) => state.viewBot.value);
  const bots = useSelector((state: any) => state.bots.value);
  const bot = bots[viewBot];
  const isPrime = bot?.id === 1;
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        className="mt-5"
      >
        <Button
          color="warning"
          onClick={() => {
            if (isPrime) {
              setShowPrimeBotModal(true);
            } else {
              setShowEditBotModal(true);
            }
          }}
        >
          EDIT
        </Button>
        <Button color="success" onClick={() => setShowAddBotModal(true)}>
          ADD
        </Button>
        <Button
          color="error"
          onClick={() => {
            if (isPrime) {
              setShowPrimeBotModal(true);
            } else {
              setShowDeleteBotModal(true);
            }
          }}
        >
          DELETE
        </Button>
      </ButtonGroup>
      <EditBotModal
        showModal={showEditBotModal}
        setShowModal={setShowEditBotModal}
        bot={bot}
      />
      <AddBotModal
        showModal={showAddBotModal}
        setShowModal={setShowAddBotModal}
      />
      <DeleteBotModal
        showModal={showDeleteBotModal}
        setShowModal={setShowDeleteBotModal}
      />
      <PrimeBotModal
        showModal={showPrimeBotModal}
        setShowModal={setShowPrimeBotModal}
      />
    </div>
  );
};

export default BotButtonGroup;
