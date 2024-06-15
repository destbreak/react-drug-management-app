import { React, useState } from "react";
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

const depos = [
  {
    id: 1,
    name: "Gudang Farmasi",
  },
  {
    id: 2,
    name: "Farmasi Rawat Jalan",
  },
  {
    id: 3,
    name: "Farmasi Rawat Inap",
  },
  {
    id: 4,
    name: "Farmasi IGD",
  },
];

const TransactionForm = ({ transactions, transactionItems, addTransaction }) => {
  const currentDate = new Date();
  const currentTransaction = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  const id = transactions.length + 1;
  const date = currentTransaction;
  const [depoOrigin, setDepoOrigin] = useState("");
  const [depoDestination, setDepoDestination] = useState("");
  const [description, setDescription] = useState("");
  const totalPrice = "";

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeDepoOrigin = (event) => {
    setDepoOrigin(event.target.value);
  };
  const handleChangeDepoDestination = (event) => {
    setDepoDestination(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(id, date, depoOrigin, depoDestination, description, totalPrice);
  };

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
                  handleChangeDescription(event);
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
                    return (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.unit}</TableCell>
                        <TableCell>{item.qty}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.totalPrice}</TableCell>
                      </TableRow>
                    );
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(event) => {
              handleSubmit(event);
              handleClose();
            }}>
            Simpan Transaksi
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TransactionForm;
