import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TransactionList = ({ transactions }) => {
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
              <TableCell>{transaction.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionList;
