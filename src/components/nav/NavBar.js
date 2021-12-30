import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
// import classes from "./navbar.module.css";
import useStyles from "./navbarcss";
const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        className={classes.appBar}
        style={{ width: "80%" }}
        position="static"
        color="inherit"
      >
        <div className={classes.brandContainer}>
          <Typography
            //  component={Link}
            to="/"
            className={classes.heading}
            variant="h4"
            align="center"
          >
            SignIn Page
          </Typography>
        </div>
        {false && (
          <Toolbar className={classes.toolbar}>
            <div className={classes.profile}>
              <Typography
                className={classes.userName}
                variant="h6"
              ></Typography>
              {/* <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              //  onClick={logout}
            >
              Logout
            </Button> */}
            </div>

            <div className={classes.divbtn}>
              <Link to="/signIn" className={classes.signbtn}>
                <Button
                  //   component={Link}
                  className={classes.signbtn}
                  variant="contained"
                  color="primary"
                  style={{ margin: ".5rem" }}
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/parcel" className={classes.signbtn}>
                <Button
                  //   component={Link}
                  style={{ margin: ".5rem" }}
                  className={classes.signbtn}
                  variant="contained"
                  color="primary"
                >
                  Parcel
                </Button>
              </Link>
              <Link to="/parcelData" className={classes.signbtn}>
                <Button
                  //   component={Link}
                  style={{ margin: ".5rem" }}
                  className={classes.signbtn}
                  variant="contained"
                  color="primary"
                >
                  Parcel Data Show
                </Button>
              </Link>
            </div>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default NavBar;
