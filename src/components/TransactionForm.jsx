import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
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
import DeleteIcon from "@mui/icons-material/Delete";
import DrugForm from "./DrugForm";

const TransactionForm = () => {
  let idr = Intl.NumberFormat("id-ID");

  const currentDate = new Date();
  const currentTransaction =
    currentDate.getFullYear() +
    "-" +
    ("00" + (currentDate.getMonth() + 1)).slice(-2) +
    "-" +
    ("00" + currentDate.getDate()).slice(-2) +
    " " +
    ("00" + currentDate.getHours()).slice(-2) +
    ":" +
    ("00" + currentDate.getMinutes()).slice(-2) +
    ":" +
    ("00" + currentDate.getSeconds()).slice(-2);

  const date = currentTransaction;
  const [depoOrigin, setDepoOrigin] = useState("");
  const [depoDestination, setDepoDestination] = useState("");
  const [description, setDescription] = useState("");
  let totalPrice = 0;

  const [transactions, setTransactions] = useState([]);
  const id = transactions.length + 1;
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

  const [depos, setDepos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/depos")
      .then((res) => {
        setDepos(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const addTransactionItem = (transactionId, code, name, unit, qty, price, totalPrice) => {
    axios
      .post("http://localhost:3001/api/items", {
        transactionId,
        code,
        name,
        unit,
        qty,
        price,
        totalPrice,
      })
      .then((res) => {
        setTransactionItems([...transactionItems, res.data]);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const handleDeleteItem = (code) => {
    axios
      .delete(`http://localhost:3001/api/items/${code}`)
      .then(() => {
        setTransactionItems(transactionItems.filter((item) => item.code !== code));
      })
      .catch((error) => {
        console.error("There was an error deleting the data!", error);
      });
  };

  const handleAddTransactions = () => {
    axios
      .post("http://localhost:3001/api/transactions", {
        id,
        date,
        depoOrigin,
        depoDestination,
        description,
        totalPrice,
      })
      .then((res) => {
        setTransactions([...transactions, res.data]);
        setDepoOrigin("");
        setDepoDestination("");
        setDescription("");
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });

    handleClose();
    window.location.reload();
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Buat Transaksi
      </Button>
      <Dialog fullWidth maxWidth="xl" open={open} onClose={handleClose}>
        <DialogTitle>{"Form Perpindahan Obat"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Nomor</p>
              <TextField disabled fullWidth value={id} />
            </Grid>
            <Grid item xs={6}>
              <p>Asal</p>
              <Autocomplete
                options={depos.map((depo) => depo.name)}
                renderInput={(params) => <TextField {...params} label="Pilih depo" />}
                value={depoOrigin}
                onChange={(event, depoOrigin) => {
                  setDepoOrigin(depoOrigin);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <p>Tanggal</p>
              <TextField disabled fullWidth value={date} />
            </Grid>
            <Grid item xs={6}>
              <p>Tujuan</p>
              <Autocomplete
                options={depos.map((depo) => depo.name)}
                renderInput={(params) => <TextField {...params} label="Pilih depo" />}
                value={depoDestination}
                onChange={(event, depoDestination) => {
                  setDepoDestination(depoDestination);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <p>Keterangan</p>
              <TextField
                fullWidth
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                label="Contoh: Penyimpanan Obat"
              />
            </Grid>
          </Grid>
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
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionItems.map((item) => {
                  if (item.transactionId === id) {
                    totalPrice = totalPrice + item.totalPrice;
                    return (
                      <TableRow key={item.code}>
                        <TableCell>{item.code}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.qty}</TableCell>
                        <TableCell>{idr.format(item.price)}</TableCell>
                        <TableCell>{idr.format(item.totalPrice)}</TableCell>
                        <TableCell>
                          <Button onClick={() => handleDeleteItem(item.code)}>
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <DrugForm transactionId={id} addTransactionItem={addTransactionItem} />
        </DialogContent>
        <DialogActions style={{ justifyContent: "space-between" }}>
          <Button variant="contained" onClick={handleAddTransactions}>
            Simpan Transaksi
          </Button>
          <TextField value={idr.format(totalPrice)} label="Total" />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TransactionForm;
