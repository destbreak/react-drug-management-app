import { React, useState } from "react";
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

const drugs = [
  {
    id: 1,
    name: "AMOXSAN CAPS 500 MG (R)",
    unit: "CAPSUL",
    price: 3020,
  },
  {
    id: 3,
    name: "ZYPRAZ TAB 0.5 MG (Alprazolam))",
    unit: "TABLET",
    price: 2404,
  },
  {
    id: 7,
    name: "ZYLORIC TAB 300 MG (Allopurinol)",
    unit: "TABLET",
    price: 4854,
  },
  {
    id: 16,
    name: "NUFAPREG TAB (prometazine)",
    unit: "TABLET",
    price: 2860,
  },
  {
    id: 21,
    name: "NUTRIBREAST TAB",
    unit: "TABLET",
    price: 7799,
  },
];

const DrugForm = ({transactionId, addTransactionItem}) => {
  const [inputValue, setInputValue] = useState("");

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [qty, setQty] = useState("");
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
    addTransactionItem(transactionId, id, name, unit, qty, price, totalPrice)
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
                            inputProps={{readOnly: readOnlyText}}
                            value={qty}
                            onChange={(event) => {
                              handleChangeQty(event);
                            }}
                            label="Banyak Barang"
                          />
                        </TableCell>
                        <TableCell>{drug.price}</TableCell>
                        <TableCell>
                          {showButton && (
                            <Button
                              variant="contained"
                              onClick={() => {
                                setId(drug.id);
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
        <DialogActions>
          <Button
            variant="contained"
            onClick={(event) => {
              handleSubmit(event);
              setInputValue("");
              setQty("");
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

export default DrugForm;
