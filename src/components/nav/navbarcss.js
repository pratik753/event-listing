/* .appBar {
    width: 80%;
    margin: auto;
    border-radius: 1rem;
}

.signbtn {
    align-items: center;
}

.divbtn {
    display: flex;
}

.signbtn {
    align-items: center;
    justify-items: center;
    margin: auto;
} */
import { makeStyles } from "@mui/styles";
export default makeStyles(() => ({
  appBar: {
    width: "80%",
    borderRadius: 16,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  signbtn: {
    margin: "1rem",
  },
}));
