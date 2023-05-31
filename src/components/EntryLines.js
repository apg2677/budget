import React from "react";
import EntryLine from "./EntryLine";
import { Container } from "semantic-ui-react";
const EntryLines = ({ entries, deleteEntry }) => {
  return (
    <Container>
      {entries.map((entry, i) => {
        return (
          <EntryLine key={entry.id} entry={entry} deleteEntry={deleteEntry} />
        );
      })}
    </Container>
  );
};

export default EntryLines;
