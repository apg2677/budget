import React from "react";
import EntryLine from "./EntryLine";
import { Container } from "semantic-ui-react";
const EntryLines = ({ entries, setIsOpen, editEntry }) => {
  return (
    <Container>
      {entries.map((entry, i) => {
        return (
          <EntryLine
            key={entry.id}
            entry={entry}
            setIsOpen={setIsOpen}
            editEntry={editEntry}
          />
        );
      })}
    </Container>
  );
};

export default EntryLines;
