import React, { useState } from "react";

// Component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputComponent from "../InputComponent";
import SwitchComponent from "../SwitchComponent";

// Redux
import { useDispatch } from "react-redux";
import { setAllBots } from "../../slices/botSlice";
import { setViewBot } from "../../slices/viewBotSlice";

// Utils
import { apiService } from "../../services/Api.service";
import { styles } from "../../styles";

const AddBotModal = (props: any) => {
  // Redux
  const dispatch = useDispatch();

  // React State
  const { showModal, setShowModal, bot } = props;
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [health, setHealth] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [isRare, setIsRare] = useState(false);

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

  const resetState = () => {
    setName("");
    setPurpose("");
    setAttack(0);
    setDefense(0);
    setHealth(0);
    setEnergy(0);
    setIntelligence(0);
    setIsRare(false);
  };

  const addBot = async () => {
    // Call create bot api
    const createBotApiRes = await apiService.createBot(payload);
    const newBot = createBotApiRes.data;

    if (createBotApiRes.isSuccessful) {
      // get new bot list from db and reset the redux state
      const getBotApiRes = await apiService.getAllBots();
      const newBotList: [] = getBotApiRes.data;
      dispatch(setAllBots(newBotList));

      // set view bot to newly created bot
      const newBotIndex: number = newBotList.findIndex(
        (bot: any) => bot.id === newBot.id
      );
      dispatch(setViewBot(newBotIndex));
    } else {
      console.log("add robot error occured");
    }

    setShowModal(false); // Close Modal
    resetState(); // Reset state
  };

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
            color="success"
            className="mx-auto"
            onClick={() => addBot()}
          >
            ADD
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddBotModal;
