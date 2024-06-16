import "./App.css";
import { Paper } from "@mui/material";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <Paper>
      <h1>Daftar Perpindahan Obat</h1>
      <TransactionForm />
      <TransactionList />
    </Paper>
  );
}

export default App;
