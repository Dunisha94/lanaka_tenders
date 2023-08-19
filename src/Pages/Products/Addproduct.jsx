import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { useAppStore } from "../../appStore";

const Addproduct = (closeEvent) => {
  //   const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const currencies = [
    {
      value: "Mobile",
      label: "Mobile",
    },
    {
      value: "Laptop",
      label: "Laptop",
    },
    {
      value: "Tab",
      label: "Tab",
    },
    {
      value: "Electronics",
      label: "Electronics",
    },
  ];

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "product");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const createProduct = async () => {
    await addDoc(empCollectionRef, {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    });
    getUsers();
    closeEvent();
    Swal.fire("Saved!", "Your file has been submitted.", "success");
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography varient="h5" align="center">
        Add Products
      </Typography>
      <IconButton
        style={{ position: "absoulte", bottom: "60px", left: "300px" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={1} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            onChange={handleNameChange}
            value={name}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
            size="small"
            onChange={handlePriceChange}
            value={price}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Category"
            select
            variant="outlined"
            size="small"
            onChange={handleCategoryChange}
            value={category}
            sx={{ minWidth: "100%" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createProduct}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <box sx={{ m: 4 }} />
    </>
  );
};

export default Addproduct;
