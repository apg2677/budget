import React, { useEffect, useState } from "react";
import { Container, Grid, Segment, Icon } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";

import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState(null);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);
  const deleteEntry = (id) => {
    const result = entries.filter((entry) => {
      return entry.id !== id;
    });
    setEntries(result);
  };

  const editEntry = (id) => {
    console.log(`edit entry with id: ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };
  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log("result", result);
    console.log("entries", entries);
    setEntries(result);
    resetEntry();
  };
  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2,500.00" size="small" />

      <DisplayBalances />

      <MainHeader title={"History"} type="h3" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
      />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
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
