import React from "react";
import { Modal, Button } from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setValue={setValue}
          setDescription={setDescription}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
