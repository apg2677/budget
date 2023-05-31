import React, { useState } from "react";
import { Container, Grid, Segment, Icon } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import ButtonSaveOrCancel from "./components/ButtonSaveOrCancel";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import EntryLines from "./components/EntryLines";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => {
      return entry.id !== id;
    });
    setEntries(result);
  };
  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log("result", result);
    console.log("entries", entries);
    setEntries(result);
  };
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2,500.00" size="small" />

      <DisplayBalances />

      <MainHeader title={"History"} type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;

var initialEntries = [
  { id: 1, description: "Work Income", value: "1000.00", isExpense: false },
  { id: 2, description: "Water Bill", value: "20.00", isExpense: true },
  { id: 3, description: "Rent", value: "300.00", isExpense: true },
  { id: 4, description: "Power Bill", value: "50.00", isExpense: true },
];
