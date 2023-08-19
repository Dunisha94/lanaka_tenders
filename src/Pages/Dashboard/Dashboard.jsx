import React from "react";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Navbar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "../Dashboard/dashboard.css";
import Accordiondash from "../../Components/Accordion/Accordiondash";
import Geochart from "../../Charts/Geochart";
import CountUp from "react-countup";
import BorderAllIcon from "@mui/icons-material/BorderAll";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <PaymentIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        $ <CountUp delay={0.2} end={22000} duration={0.5} />
                      </Typography>
                      <Typography
                        gutterBottom
                        varient="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <ShoppingBagIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <CountUp delay={0.2} end={550} duration={0.5} />
                      </Typography>
                      <Typography
                        gutterBottom
                        varient="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card
                    // sx={{ minWidth: 49 + "%", height: 75 }}
                    className="gradientlight"
                  >
                    <Stack spacing={2} direction="row">
                      <div className="iconstyleblack">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className="pricelist">
                          $ <CountUp delay={0.2} end={38000} duration={0.5} />
                        </span>
                        <br />
                        <span className="pricesublist">Total Income</span>
                      </div>
                    </Stack>
                  </Card>

                  <Card
                    // sx={{ minWidth: 49 + "%", height: 75 }}
                    className="gradientlightejectorders"
                  >
                    <Stack spacing={2} direction="row">
                      <div className="iconstyleblack">
                        <BorderAllIcon />
                      </div>
                      <div className="paddingall">
                        <span className="pricelist">
                          <CountUp delay={0.2} end={125} duration={0.5} />
                        </span>
                        <br />
                        <span className="pricesublist">Eject Orders</span>
                      </div>
                    </Stack>
                    {/* <Stack spacing={2} direction="row">
                      <div className="iconstyleblack">
                        <StorefrontIcon />
                        <div className="paddingall">
                          <span className="pricelist">$203K</span>
                          <br />
                          <span className="pricesublist">Total Income</span>
                        </div>
                      </div>
                    </Stack> */}
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    {/* <Barchart /> */}
                    <Geochart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className="paddingall">
                      <span className="pricelist">Popular Products</span>
                    </div>
                    Products Category
                    <Box height={10} />
                    <Accordiondash />
                    {/* <Piechart/> */}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Dashboard;
