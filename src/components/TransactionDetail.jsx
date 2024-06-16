import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const TransactionDetail = ({ id }) => {
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

  const [transactionItems, setTransactionItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/items")
      .then((res) => {
        setTransactionItems(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Rincian
      </Button>
      <Dialog fullWidth maxWidth="xl" open={open} onClose={handleClose}>
        <DialogTitle>{"Rincian Transaksi Perpindahan Obat"}</DialogTitle>
        <DialogContent>
          {transactions.map((transaction) => {
            if (transaction.id === id) {
              return (
                <Grid key={transaction.id} container spacing={2}>
                  <Grid item xs={6}>
                    <p>Nomor</p>
                    <TextField fullWidth value={transaction.id} inputProps={{ readOnly: true }} />
                  </Grid>
                  <Grid item xs={6}>
                    <p>Asal</p>
                    <TextField fullWidth value={transaction.depoOrigin} inputProps={{ readOnly: true }} />
                  </Grid>
                  <Grid item xs={6}>
                    <p>Tanggal</p>
                    <TextField fullWidth value={transaction.date} inputProps={{ readOnly: true }} />
                  </Grid>
                  <Grid item xs={6}>
                    <p>Tujuan</p>
                    <TextField fullWidth value={transaction.depoDestination} inputProps={{ readOnly: true }} />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Keterangan</p>
                    <TextField fullWidth value={transaction.description} inputProps={{ readOnly: true }} />
                  </Grid>
                </Grid>
              );
            }
          })}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Kode</TableCell>
                  <TableCell>Nama Obat</TableCell>
                  <TableCell>Satuan</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Harga</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionItems.map((item) => {
                  if (item.transactionId === id) {
                    return (
                      <TableRow key={item.code}>
                        <TableCell>{item.code}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.qty}</TableCell>
                        <TableCell>{idr.format(item.price)}</TableCell>
                        <TableCell>{idr.format(item.totalPrice)}</TableCell>
                      </TableRow>
                    );
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TransactionDetail;
