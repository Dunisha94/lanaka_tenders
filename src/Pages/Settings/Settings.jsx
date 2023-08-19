import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Box from "@mui/material/Box";
import List from "./List";
import Grid from "@mui/material/Grid";




export default function Settings() {
  return (
    <>
      <Navbar />
      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Grid item xs={8}>
                  <List/> 
                <Box height={20} />
              </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
