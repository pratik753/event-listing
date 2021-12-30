import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  Box,
  TextField,
  Grid,
} from "@mui/material";
import useStyles from "./signincss";
import { signUp } from "../../action/auth";

import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [value, setvalue] = useState({
    Fname: "",
    Lname: "",
    phone: "",
    email: "",
    password: "",
  });
  const FnameHandler = (event) => {
    setvalue({ ...value, email: event.target.value });
  };
  const LnameHandler = (event) => {
    setvalue({ ...value, email: event.target.value });
  };
  const emailHandler = (event) => {
    setvalue({ ...value, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setvalue({ ...value, password: event.target.value });
  };
  const PhoneHandler = (event) => {
    setvalue({ ...value, email: event.target.value });
    // console.log(...value);
  };
  const SubmitHandler = async (event) => {
    setvalue({ ...value, email: event.target.value });
    // console.log(...value);
    const data = await signUp(value, navigate);
    props.setAuth(1);
    console.log(data);
  };
  const switchonClick = () => {
    props.setLogin(0);
    navigate("/signIn");
  };
  return (
    <div>
      <AppBar
        className={classes.signDiv}
        style={{ width: "80%" }}
        position="static"
        color="inherit"
      >
        <h2>REGISTER</h2>
        <center>
          <Grid container columnSpacing={1} rowSpacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="text"
                className={classes.fillbox}
                onChange={FnameHandler}
                placeholder="Enter First Username"
                name="uname"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="text"
                className={classes.fillbox}
                onChange={LnameHandler}
                placeholder="Enter Last Username"
                name="uname"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                className={classes.fillbox}
                onChange={PhoneHandler}
                placeholder="Phone no"
                name="uname"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                className={classes.fillbox}
                onChange={emailHandler}
                placeholder="Enter e-mail"
                name="uname"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                className={classes.fillbox}
                onChange={passwordHandler}
                placeholder="Enter Password"
                name="psw"
                required
              />
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchonClick}>
                  Already have an Account? Sign In
                  {/* Already have an Account? Sign In */}
                  {/* "Don't have an account? Sign Up" */}
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={SubmitHandler}
                className={classes.sub}
                type="submit"
              >
                Register
              </Button>
            </Grid>
          </Grid>
          {/* <div class={classes.container}>
        <div>{/* <label for="uname"><b>Username</b></label> *</div>
        <div>{/* <label for="uname"><b>Username</b></label> *</div>
        <div>{/* <label for="uname"><b>Username</b></label> *</div>
        <div>{/* <label for="uname"><b>Username</b></label> }</div>
        <div>{/* <label for="psw"><b>Password</b></label> </div>
      </div> */}
        </center>
      </AppBar>
    </div>
  );
};

export default SignUp;
