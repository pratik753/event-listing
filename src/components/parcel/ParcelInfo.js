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
import useStyles from "./parcelcss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { parcelAction } from "../../store/parcel";
import { useSelector } from "react-redux";
import ParcelData from "./ParcelData";
const ParcelInfo = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setvalue] = useState({
    name: "",
    event_date: "",
    event_location: "",
    type_of_event: "",
  });

  const nameHandler = (event) => {
    setvalue({ ...value, name: event.target.value });
  };
  const event_dateHandler = (event) => {
    setvalue({ ...value, event_date: event.target.value });
  };
  const event_locationHandler = (event) => {
    setvalue({ ...value, event_location: event.target.value });
  };
  const type_of_eventHandler = (event) => {
    setvalue({ ...value, type_of_event: event.target.value });
  };

  const parcelData = useSelector((state) => state.parcel.parcelDataa);
  const SubmitHandler = () => {
    dispatch(parcelAction.add({ ...value }));
    console.log(value);
    console.log(parcelData);
  };
  return (
    <div>
      <AppBar
        className={classes.signDiv}
        style={{ width: "80%" }}
        position="static"
        color="inherit"
      >
        <center>
          <label>
            <h2>Event Info</h2>
            <hr />
            <br />
          </label>
          <Grid container columnSpacing={1} rowSpacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Name"
                type="text"
                className={classes.fillbox}
                onChange={nameHandler}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="date"
                className={classes.fillbox}
                onChange={event_dateHandler}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="type_of_event"
                type="text"
                className={classes.fillbox}
                onChange={type_of_eventHandler}
                name="psw"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="event_location"
                type="text"
                className={classes.fillbox}
                onChange={event_locationHandler}
                name="psw"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={SubmitHandler}
                className={classes.sub}
                type="submit"
              >
                Add Event
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

export default ParcelInfo;
