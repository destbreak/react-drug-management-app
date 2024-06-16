import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TransactionDetail from "./TransactionDetail";

const TransactionList = () => {
  let idr = Intl.NumberFormat("id-ID");

  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/transactions")
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleDeleteTransaction = (id) => {
    axios
      .delete(`http://localhost:3001/api/transactions/${id}`)
      .then(() => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the data!", error);
      });
  };

  const handleDeleteItem = (id) => {
    axios
      .delete(`http://localhost:3001/api/items/${id}`)
      .then(() => {
        setTransactionItems(transactionItems.filter((item) => item.transactionId !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the data!", error);
      });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Tanggal</TableCell>
            <TableCell>Depo Asal</TableCell>
            <TableCell>Depo Tujuan</TableCell>
            <TableCell>Keterangan</TableCell>
            <TableCell>Total Harga</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.depoOrigin}</TableCell>
              <TableCell>{transaction.depoDestination}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{idr.format(transaction.totalPrice)}</TableCell>
              <TableCell>
                <TransactionDetail id={transaction.id} />
                <Button
                  onClick={() => {
                    handleDeleteTransaction(transaction.id);
                    handleDeleteItem(transaction.id);
                  }}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionList;
