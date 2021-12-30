// .appBar {
//     margin-top: 2rem;
//     width: 80%;
//     margin: auto;
//     border-radius: 1rem;
// }
import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  signDiv: {
    padding: "1rem",
    margin: "auto",
    // margin: "30px 0",
    marginTop: "1rem",
    borderRadius: "1rem",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
  signbtn: {
    margin: "1rem",
  },
  divcontwel: {
    // background: "white",
    // borderRadius: "1rem",
    borderRadius: "1rem",
    padding: "1rem",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    // marginRight: "1rem",
  },
  imgdiv: {
    height: "100%",
    width: "100%",
  },
  gridcont: {
    padding: "4rem",
  },
  contwel: {
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
}));
