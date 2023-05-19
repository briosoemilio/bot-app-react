import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styles } from "../../styles";
import InputComponent from "../InputComponent";
import SwitchComponent from "../SwitchComponent";
import { useDispatch } from "react-redux";
import { apiService } from "../../services/Api.service";
import { editBot } from "../../slices/botSlice";

const EditBotModal = (props: any) => {
  const dispatch = useDispatch();
  const { showModal, setShowModal, bot } = props;

  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [health, setHealth] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [isRare, setIsRare] = useState(false);

  useEffect(() => {
    if (showModal) {
      // Set Current Data on modal open
      setName(bot.name);
      setPurpose(bot.purpose);
      setAttack(bot.attack);
      setDefense(bot.defense);
      setHealth(bot.health);
      setEnergy(bot.energy);
      setIntelligence(bot.intelligence);
      setIsRare(bot.isRare);
    }
  }, [showModal]);

  const handleEditBot = async () => {
    const payload = {
      name,
      purpose,
      attack,
      defense,
      health,
      energy,
      intelligence,
      isRare,
    };

    // Edit Bot Redux State
    const reduxPayload = {
      botId: bot.id,
      data: payload,
    };
    dispatch(editBot(reduxPayload));

    // Edit database
    await apiService.updateBot(bot.id, payload);

    // Close Modal
    setShowModal(false);
  };

  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <Box sx={styles.modalStyle}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          Edit Bot
        </Typography>
        <InputComponent
          value={name}
          setValue={setName}
          label={"Name"}
          type={"text"}
        />
        <InputComponent
          value={purpose}
          setValue={setPurpose}
          label={"Pupose"}
          type={"text"}
        />
        <InputComponent
          value={attack}
          setValue={setAttack}
          label={"Attack"}
          type={"number"}
        />
        <InputComponent
          value={defense}
          setValue={setDefense}
          label={"Defense"}
          type={"number"}
        />
        <InputComponent
          value={health}
          setValue={setHealth}
          label={"Health"}
          type={"number"}
        />
        <InputComponent
          value={energy}
          setValue={setEnergy}
          label={"Energy"}
          type={"number"}
        />
        <InputComponent
          value={intelligence}
          setValue={setIntelligence}
          label={"Intelligence"}
          type={"number"}
        />
        <SwitchComponent value={isRare} setValue={setIsRare} />
        <div className="mt-3 d-flex justify-content-center">
          <Button
            variant="contained"
            color="warning"
            className="mx-auto"
            onClick={() => handleEditBot()}
          >
            EDIT
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default EditBotModal;
