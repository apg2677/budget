import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";

import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";

import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    setBalance(totalIncome - totalExpense);
  }, [totalIncome, totalExpense]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += +entry.value);
      }
      return (totalIncome += +entry.value);
    });
    console.log(totalIncome);
    console.log(totalExpense);
    setTotalIncome(totalIncome);
    setTotalExpense(totalExpense);
  }, [entries]);
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
    setValue(0);
    setIsExpense(true);
  };
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value={balance} size="small" />

      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />

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
  { id: 1, description: "Work Income", value: 1000.0, isExpense: false },
  { id: 2, description: "Water Bill", value: 20.0, isExpense: true },
  { id: 3, description: "Rent", value: 300.0, isExpense: true },
  { id: 4, description: "Power Bill", value: 50.0, isExpense: true },
];
