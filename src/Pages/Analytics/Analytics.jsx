import React from "react";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Navbar from "../../Components/Navbar/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonIcon from "@mui/icons-material/Person";
import "../Dashboard/dashboard.css";
import Accordiondash from "../../Components/Accordion/Accordiondash";
import Barchart from "../../Charts/Barchart";
import Geochart from "../../Charts/Geochart";
import Piechart from "../../Charts/Piechart";
import "../Analytics/analytics.css";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import CountUp from "react-countup";

const Analytics = () => {
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
                    sx={{ minWidth: 30 + "%", height: 150 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <PersonAddIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <CountUp delay={0.2} end={325} duration={0.5} />
                      </Typography>
                      <Typography
                        gutterBottom
                        varient="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Visitors
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 30 + "%", height: 150 }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <PersonIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <CountUp delay={0.2} end={278} duration={0.5} />
                      </Typography>
                      <Typography
                        gutterBottom
                        varient="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Pending Visitors
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 30 + "%", height: 150 }}
                    className="gradientdark"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <PersonRemoveIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <CountUp delay={0.2} end={47} duration={0.5} />
                      </Typography>
                      <Typography
                        gutterBottom
                        varient="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Eject Visitors
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>

                <Box height={20} />
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Stack spacing={2} direction="row">
                      <Card
                        sx={{ minWidth: 30 + "%", height: 150 }}
                        className="gradientorder"
                      >
                        <CardContent>
                          <div className="iconstyle">
                            <ViewModuleIcon />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#ffffff" }}
                          >
                            <CountUp delay={0.2} end={176} duration={0.5} />
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
                      <Card
                        sx={{ minWidth: 30 + "%", height: 150 }}
                        className="gradientlightorder"
                      >
                        <CardContent>
                          <div className="iconstyle">
                            <ViewQuiltIcon />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#ffffff" }}
                          >
                            <CountUp delay={0.2} end={153} duration={0.5} />
                          </Typography>
                          <Typography
                            gutterBottom
                            varient="body2"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Pending Orders
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card
                        sx={{ minWidth: 30 + "%", height: 150 }}
                        className="gradientdarkorder"
                      >
                        <CardContent>
                          <div className="iconstyle">
                            <ViewStreamIcon />
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#ffffff" }}
                          >
                            <CountUp delay={0.2} end={23} duration={0.5} />
                          </Typography>
                          <Typography
                            gutterBottom
                            varient="body2"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Eject Orders
                          </Typography>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 43 + "vh" }}>
                  <CardContent>
                    <Barchart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 52 + "vh" }}>
                  <CardContent>
                    <Geochart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 52 + "vh" }}>
                  <CardContent>
                    <div className="paddingall">
                      <span className="pricelist">Popular Products</span>
                    </div>
                    Popular Products
                    <Box height={10} />
                    <Piechart />
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

export default Analytics;
