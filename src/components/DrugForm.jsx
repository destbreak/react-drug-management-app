import React, { useState, useEffect } from "react";
import { supabase } from "../../backend/supabaseClient";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DrugForm = ({ transactionId, addTransactionItem }) => {
  let idr = Intl.NumberFormat("id-ID");

  const [inputValue, setInputValue] = useState("");
  const [drugs, setDrugs] = useState([]);
  const [selectedDrugs, setSelectedDrugs] = useState([]);
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetchDrugs();
  }, []);

  const fetchDrugs = async () => {
    const { data, error } = await supabase.from("drugs").select("*");
    if (error) console.log(error);
    else setDrugs(data);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (selectedDrugs.length > 0) {
      const confirmClose = window.confirm(
        "Anda memiliki perubahan yang belum disimpan. Apakah Anda yakin ingin menutup dialog?"
      );
      if (confirmClose) {
        setOpen(false);
        setInputValue("");
        setQty(1);
        setSelectedDrugs([]);
      }
    } else {
      setOpen(false);
      setInputValue("");
      setQty(1);
    }
  };

  const handleAddDrug = (drug, qty) => {
    const totalPrice = qty * drug.price;
    setSelectedDrugs([...selectedDrugs, { ...drug, qty, totalPrice }]);
    setInputValue("");
    setQty(1);
  };

  const handleSaveDrugs = () => {
    selectedDrugs.forEach((drug) => {
      const { id, name, unit, qty, price, totalPrice } = drug;
      addTransactionItem(transactionId, id, name, unit, qty, price, totalPrice);
    });
    setOpen(false);
    setSelectedDrugs([]);
    alert("Obat berhasil disimpan");
  };

  const handleChangeQty = (event) => {
    setQty(parseInt(event.target.value));
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Tambah Obat
      </Button>
      <Dialog fullWidth maxWidth="l" open={open} onClose={handleClose}>
        <DialogTitle>
          {"Daftar Obat"}
          <IconButton aria-label="close" onClick={handleClose} style={{ position: "absolute", right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
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
                            InputProps={{ inputProps: { min: 1 } }}
                            value={qty}
                            onChange={handleChangeQty}
                            label="Banyak Barang"
                          />
                        </TableCell>
                        <TableCell>{idr.format(drug.price)}</TableCell>
                        <TableCell>{idr.format(qty * drug.price)}</TableCell>
                        <TableCell>
                          <Button variant="contained" onClick={() => handleAddDrug(drug, qty)}>
                            Tambah Obat
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  }
                })}
                {selectedDrugs.map((drug, index) => (
                  <TableRow key={index}>
                    <TableCell>{drug.id}</TableCell>
                    <TableCell>{drug.name}</TableCell>
                    <TableCell>{drug.unit}</TableCell>
                    <TableCell>{drug.qty}</TableCell>
                    <TableCell>{idr.format(drug.price)}</TableCell>
                    <TableCell>{idr.format(drug.totalPrice)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions style={styles.dialogActions}>
          <Button variant="contained" onClick={handleSaveDrugs}>
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
