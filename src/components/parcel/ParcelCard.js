import React from "react";
import useStyles from "./parcelcss";
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
const ParcelCard = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        className={classes.parcelDiv}
        style={{ width: "95%" }}
        position="static"
        color="inherit"
      >
        <h5 className={classes.h5Head}>Name : {props.name}</h5>
        <h5 className={classes.h5Head}>event_date : {props.event_date}</h5>
        <h5 className={classes.h5Head}>
          type_of_event : {props.type_of_event}
        </h5>
        <h5 className={classes.h5Head}>
          event_location : {props.event_location}
        </h5>
        <h5 className={classes.h5Head}>
          type_of_event : {props.type_of_event}
        </h5>
      </AppBar>
    </div>
  );
};

export default ParcelCard;
