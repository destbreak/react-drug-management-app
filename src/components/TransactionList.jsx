import React from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TransactionDetail from "./TransactionDetail";

const TransactionList = ({ transactions, transactionItems, deleteTransaction }) => {
  let idr = Intl.NumberFormat("id-ID");

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
                <TransactionDetail
                  id={transaction.id}
                  transactions={transactions}
                  transactionItems={transactionItems}
                />
                <Button onClick={() => deleteTransaction(transaction.id)}>
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
