import React, { useEffect, useState } from "react";
import { supabase } from "../../backend/supabaseClient";
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

  useEffect(() => {
    fetchTransactions();
    fetchTransactionItems();
    fetchDepos();
  }, []);

  const [transactions, setTransactions] = useState([]);
  const id = transactions.length + 1;
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

  const [depos, setDepos] = useState([]);
  const fetchDepos = async () => {
    const { data, error } = await supabase.from("depos").select("*");
    if (error) console.log(error);
    else setDepos(data);
  };

  const addTransactionItem = async (transactionId, code, name, unit, qty, price, totalPrice) => {
    const { data, error } = await supabase.from("items").insert([
      {
        transactionId,
        code,
        name,
        unit,
        qty,
        price,
        totalPrice,
      },
    ]);
    if (error) console.log(error);
    else {
      fetchTransactionItems();
    }
  };
  
  const handleDeleteItem = async (code) => {
    const { error } = await supabase
    .from('items')
    .delete()
    .eq('code', code)
    if (error) console.log(error);
    else fetchTransactionItems();
  }

  const handleAddTransactions = async () => {
    const { data, error } = await supabase.from("transactions").insert([
      {
        id,
        date,
        depoOrigin,
        depoDestination,
        description,
        totalPrice,
      },
    ]);
    if (error) console.log(error);
    else {
      setDepoOrigin("");
      setDepoDestination("");
      setDescription("");
      fetchTransactions();
    }

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
          <DrugForm transactionId={id} addTransactionItem={addTransactionItem} />
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
        </DialogContent>
        <DialogActions style={styles.dialogActions}>
          <Button variant="contained" onClick={handleAddTransactions}>
            Simpan Transaksi
          </Button>
          <TextField value={idr.format(totalPrice)} label="Total" />
        </DialogActions>
      </Dialog>
    </>
  );
};

const styles = {
  dialogActions: {
    justifyContent: "space-between",
  },
};

export default TransactionForm;
