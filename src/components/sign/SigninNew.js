import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  Box,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import useStyles from "./signincss";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SigninNew = (props) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(0);
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={classes.gridcont}>
        <Grid item xs={4} className={classes.contwel}>
          <Paper className={classes.divcontwel}>
            <h3>Hi, Welcome Back 💫</h3>
            <img
              className={classes.imgdiv}
              src="https://minimal-assets-api.vercel.app/assets/illustrations/illustration_login.png"
              //   height={430}
              //   width={450}
            />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          {login === 0 && (
            <SignIn setLogin={setLogin} setAuth={props.setAuth} />
          )}
          {login === 1 && (
            <SignUp setLogin={setLogin} setAuth={props.setAuth} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default SigninNew;
