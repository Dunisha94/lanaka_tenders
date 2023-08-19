import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Productlist from "./Productlist";
import Box from "@mui/material/Box";

export default function Products() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Productlist />
          </Box>
        </Box>
      </div>
    </>
  );
}
