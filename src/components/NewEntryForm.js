import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
const NewEntryForm = () => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          label="Description"
          icon="tags"
          width={12}
          placeholder="New Shiny thing"
        />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          placeholder="100.00"
          width={4}
          label="Value"
        ></Form.Input>
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
};

export default NewEntryForm;
