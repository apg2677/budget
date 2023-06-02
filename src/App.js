import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";

import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";

import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

import { useSelector } from "react-redux";
function App() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const entries = useSelector((state) => state.entries);
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
      // setEntries(newEntries);
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

    setTotalIncome(totalIncome);
    setTotalExpense(totalExpense);
  }, [entries]);

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

    // setEntries(result);
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
