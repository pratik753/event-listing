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
  Paper,
} from "@mui/material";
import { useSelector } from "react-redux";
import ParcelCard from "./ParcelCard";
import useStyles from "./parcelcss";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
const ParcelData = () => {
  const classes = useStyles();
  const [parcel, setparcel] = useState([]);
  const parcelData = useSelector((state) => state.parcel.parcelDataa);
  useEffect(() => {
    const mdata = [];
    for (const key in parcelData) {
      mdata.push({
        _id: key,
        name: parcelData[key].name,
        event_date: parcelData[key].event_date,
        event_location: parcelData[key].event_location,
        type_of_event: parcelData[key].type_of_event,
      });
    }
    console.log(mdata);
    setparcel(mdata);
  }, []);
  console.log(parcelData);
  let i = 1;
  const parcelMap = parcel.map((data) => (
    <ParcelCard
      key={i++}
      name={data.name}
      event_date={data.event_date}
      event_location={data.event_location}
      type_of_event={data.type_of_event}
    />
  ));

  // const parcelMapTable = () => {
  //   return parcel.map((data) => (
  //     <tr key={i}>
  //       <td className={classes.tablehead}>{i++}</td>
  //       <td className={classes.tablehead}>{data.parcel_info}</td>
  //       <td className={classes.tablehead}>{data.parcel_cost}</td>
  //       <td className={classes.tablehead}>{data.parcel_starting_location}</td>
  //       <td className={classes.tablehead}>{data.parcel_ending_location}</td>
  //       <td className={classes.tablehead}>{data.sender_name}</td>
  //       <td className={classes.tablehead}>{data.sender_address}</td>
  //       <td className={classes.tablehead}>{data.sender_phone}</td>
  //       <td className={classes.tablehead}>{data.receiver_name}</td>
  //       <td className={classes.tablehead}>{data.receiver_address}</td>
  //       <td className={classes.tablehead}>{data.receiver_phone}</td>
  //     </tr>
  //   ));
  // };
  return (
    <>
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
            Data
          </Typography>
        </div>
      </AppBar>
      <center>
        <br />
        <div className={classes.mapcard} style={{ width: "85%" }}>
          <Grid container spacing={2} className={classes.tabecont}>
            <Paper>{parcelMap}</Paper>
          </Grid>
        </div>
      </center>
    </>
  );
};

export default ParcelData;
