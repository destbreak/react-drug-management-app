import { useState } from "react";
import "./App.css";
import { Paper } from "@mui/material";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "14/05/2024 07:09:45",
      depoOrigin: "Gudang Farmasi",
      depoDestination: "Farmasi Rawat Jalan",
      description: "Pengiriman Stok",
      totalPrice: 54240,
    },
    {
      id: 2,
      date: "14/05/2024 08:34:21",
      depoOrigin: "Gudang Farmasi",
      depoDestination: "Farmasi Rawat Inap",
      description: "Pemenuhan Permintaan",
      totalPrice: 3000000,
    },
    {
      id: 3,
      date: "14/05/2024 08:54:03",
      depoOrigin: "Farmasi Rawat Inap",
      depoDestination: "Farmasi IGD",
      description: "Pinjam Obat",
      totalPrice: 500000,
    },
  ]);

  return (
    <Paper>
      <h1>Daftar Perpindahan Obat</h1>
      <TransactionList transactions={transactions} />
    </Paper>
  );
}

export default App;
