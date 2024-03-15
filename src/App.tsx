import React, { useState } from "react";
import "./App.css";
import ControlledForm from "./components/ControlForm/ControlForm";
import Modal from "./components/Modal/Modalka";
import CardDetailsModal from "./components/CardDetailsModal/CardDetailsModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <ControlledForm />
      <h1>Hey, click on the button to open the modal!</h1>
      <button onClick={openModal}>Open</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CardDetailsModal />
      </Modal>
    </div>
  );
}

export default App;
