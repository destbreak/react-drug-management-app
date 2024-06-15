import { useState } from "react";
import "./App.css";
import { Paper } from "@mui/material";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";

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

  const [transactionItems, setTransactionItems] = useState([
    {
      transactionId: 1,
      id: "00000001",
      name: "AMOXSAN CAPS 500 MG (R)",
      unit: "CAPSUL",
      qty: 10,
      price: 3020,
      totalPrice: 30200,
    },
    {
      transactionId: 1,
      id: "00000003",
      name: "ZYPRAZ TAB 0.5 MG (Alprazolam))",
      unit: "TABLET",
      qty: 10,
      price: 2404,
      totalPrice: 24040,
    },
  ]);

  const addTransaction = (id, date, depoOrigin, depoDestination, description, totalPrice) => {
    const newTransaction = {
      id: id,
      date: date,
      depoOrigin: depoOrigin,
      depoDestination: depoDestination,
      description: description,
      totalPrice: totalPrice,
    };

    const updatedTransactions = transactions.concat(newTransaction);
    setTransactions(updatedTransactions);
  };

  const addTransactionItem = (transactionId, id, name, unit, qty, price, totalPrice) => {
    const newTransactionItem = {
      transactionId: transactionId,
      id: id,
      name: name,
      unit: unit,
      qty: qty,
      price: price,
      totalPrice: totalPrice,
    }

    const updatedTransactionItems = transactionItems.concat(newTransactionItem);
    setTransactionItems(updatedTransactionItems);
  }

  return (
    <Paper>
      <h1>Daftar Perpindahan Obat</h1>
      <TransactionForm
        transactions={transactions}
        transactionItems={transactionItems}
        addTransaction={addTransaction}
        addTransactionItem={addTransactionItem}
      />
      <TransactionList transactions={transactions} />
    </Paper>
  );
}

export default App;
