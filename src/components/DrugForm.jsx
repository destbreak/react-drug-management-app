import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const DrugForm = ({ transactionId, addTransactionItem }) => {
  let idr = Intl.NumberFormat("id-ID");

  const [inputValue, setInputValue] = useState("");

  const [drugs, setDrugs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/drugs")
      .then((res) => {
        setDrugs(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState("");
  const totalPrice = qty * price;

  const handleChangeQty = (event) => {
    setQty(parseInt(event.target.value));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showButton, setShowButton] = useState(true);
  const [readOnlyText, setReadOnlyText] = useState(false);
  const toggleButton = () => setShowButton(!showButton);
  const toggleReadOnlyText = () => setReadOnlyText(!readOnlyText);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransactionItem(transactionId, code, name, unit, qty, price, totalPrice);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Tambah Obat
      </Button>
      <Dialog fullWidth maxWidth="l" open={open} onClose={handleClose}>
        <DialogTitle>{"Daftar Obat"}</DialogTitle>
        <DialogContent>
          <Autocomplete
            freeSolo
            options={drugs.map((drug) => drug.name)}
            renderInput={(params) => <TextField {...params} label="Cari obat" />}
            value={inputValue}
            onChange={(event, inputValue) => {
              setInputValue(inputValue);
            }}
          />
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
                {drugs.map((drug) => {
                  if (drug.name === inputValue) {
                    return (
                      <TableRow key={drug.id}>
                        <TableCell>{drug.id}</TableCell>
                        <TableCell>{drug.name}</TableCell>
                        <TableCell>{drug.unit}</TableCell>
                        <TableCell>
                          <TextField
                            type="number"
                            InputProps={{ inputProps: { min: 1 }, readOnly: readOnlyText }}
                            value={qty}
                            onChange={(event) => {
                              handleChangeQty(event);
                            }}
                            label="Banyak Barang"
                          />
                        </TableCell>
                        <TableCell>{idr.format(drug.price)}</TableCell>
                        <TableCell>{idr.format(qty * drug.price)}</TableCell>
                        <TableCell>
                          {showButton && (
                            <Button
                              variant="contained"
                              onClick={() => {
                                setCode(drug.id);
                                setName(drug.name);
                                setUnit(drug.unit);
                                setPrice(drug.price);
                                toggleButton();
                                toggleReadOnlyText();
                              }}>
                              Tambah Obat
                            </Button>
                          )}
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
          <Button
            variant="contained"
            onClick={(event) => {
              handleSubmit(event);
              setInputValue("");
              setQty(1);
              toggleButton();
              toggleReadOnlyText();
              handleClose();
            }}>
            Simpan Obat
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const styles = {
  dialogActions: {
    justifyContent: "flex-start",
  },
};

export default DrugForm;
