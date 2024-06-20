import React, { useEffect, useState } from "react";
import { supabase } from "../../backend/supabaseClient";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TransactionDetail from "./TransactionDetail";

const TransactionList = () => {
  let idr = Intl.NumberFormat("id-ID");

  useEffect(() => {
    fetchTransactions();
    fetchTransactionItems();
  }, []);

  const [transactions, setTransactions] = useState([]);
  const fetchTransactions = async () => {
    const { data, error } = await supabase.from("transactions").select("*");
    if (error) console.log(error);
    else setTransactions(data);
  };

  const [transactionItems, setTransactionItems] = useState([]);
  const fetchTransactionItems = async () => {
    const { data, error } = await supabase.from("items").select("*");
    if (error) console.log(error);
    else setTransactionItems(data);
  };

  const handleDeleteTransaction = async (id) => {
    const { error } = await supabase.from("transactions").delete().eq("id", id);
    if (error) console.log(error);
    else fetchTransactions();
  };

  const handleDeleteItem = async (id) => {
    const { error } = await supabase.from("items").delete().eq("transactionId", id);
    if (error) console.log(error);
    else fetchTransactionItems();
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
