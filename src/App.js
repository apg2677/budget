import { Container, Grid, Segment, Icon } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import ButtonSaveOrCancel from "./components/ButtonSaveOrCancel";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2,500.00" size="small" />

      <DisplayBalances />

      <MainHeader title={"History"} type="h3" />
      <EntryLine description="income" value="10.56" />
      <EntryLine description="expense" value="120.56" isExpense />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
