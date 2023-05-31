import React from "react";
import { Modal, Button } from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";

const ModalEdit = ({ isOpen, setIsOpen }) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <NewEntryForm />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
