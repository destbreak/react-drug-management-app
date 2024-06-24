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
  const idr = Intl.NumberFormat("id-ID");

  const [inputValue, setInputValue] = useState("");
  const [selectedDrugs, setSelectedDrugs] = useState([]);

  useEffect(() => {
    fetchDrugs();
  }, []);

  const [drugs, setDrugs] = useState([]);
  const fetchDrugs = async () => {
    const { data, error } = await supabase.from("drugs").select("*");
    if (error) console.log(error);
    else setDrugs(data);
  };

  const [qty, setQty] = useState(1);
  const handleChangeQty = (index, value) => {
    const updatedDrugs = [...selectedDrugs];
    updatedDrugs[index].qty = value;
    setSelectedDrugs(updatedDrugs);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddDrug = () => {
    const selectedDrug = drugs.find((drug) => drug.name === inputValue);
    if (selectedDrug) {
      setSelectedDrugs([...selectedDrugs, { ...selectedDrug, qty, totalPrice: qty * selectedDrug.price }]);
      setInputValue("");
      setQty(1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDrugs.length === 0) {
      alert("Obat harus ditambah terlebih dahulu");
      return;
    }
    selectedDrugs.forEach((drug) => {
      addTransactionItem(transactionId, drug.id, drug.name, drug.unit, drug.qty, drug.price, drug.totalPrice);
    });
    setSelectedDrugs([]);
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Tambah Obat
      </Button>
      <Dialog fullWidth maxWidth="l" open={open}>
        <DialogTitle>
          {"Daftar Obat"}
          <IconButton aria-label="close" onClick={handleClose} sx={{ position: "absolute", right: 8, top: 8 }}>
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
                        <TableCell>-</TableCell>
                        <TableCell>{idr.format(drug.price)}</TableCell>
                        <TableCell>
                          <Button variant="contained" onClick={handleAddDrug}>
                            Tambah
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  }
                })}
                {selectedDrugs.map((drug, index) => (
                  <TableRow key={drug.id}>
                    <TableCell>{drug.id}</TableCell>
                    <TableCell>{drug.name}</TableCell>
                    <TableCell>{drug.unit}</TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        InputProps={{ inputProps: { min: 1 } }}
                        value={drug.qty}
                        onChange={(event) => handleChangeQty(index, parseInt(event.target.value))}
                        label="Banyak Barang"
                      />
                    </TableCell>
                    <TableCell>{idr.format(drug.price)}</TableCell>
                    <TableCell>{idr.format(drug.qty * drug.price)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions style={styles.dialogActions}>
          <Button variant="contained" onClick={handleSubmit}>
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
