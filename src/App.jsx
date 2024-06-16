import "./App.css";
import { Paper } from "@mui/material";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <Paper style={styles.container}>
      <h1 style={styles.title}>Daftar Perpindahan Obat</h1>
      <TransactionForm />
      <TransactionList />
    </Paper>
  );
}

const styles = {
  container: {
    margin: "16px 0 32px 0",
    padding: "32px",
  },
  title: {
    margin: "0",
    marginBottom: "16px",
    textAlign: "center",
  },
};

export default App;
