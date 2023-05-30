import React, { useState } from "react";
import { Container, Grid, Segment, Icon } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import ButtonSaveOrCancel from "./components/ButtonSaveOrCancel";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2,500.00" size="small" />

      <DisplayBalances />

      <MainHeader title={"History"} type="h3" />
      {entries.map((entry, i) => {
        return (
          <EntryLine
            key={i}
            isExpense={entry.isExpense}
            description={entry.title}
            value={entry.value}
          />
        );
      })}

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

var initialEntries = [
  { title: "Work Income", value: "1000.00", isExpense: false },
  { title: "Water Bill", value: "20.00", isExpense: true },
  { title: "Rent", value: "300.00", isExpense: true },
  { title: "Power Bill", value: "50.00", isExpense: true },
];
