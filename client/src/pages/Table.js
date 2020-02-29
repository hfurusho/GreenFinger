import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import {NavLink} from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

// Generate Order Data
function createData(id, img, name, location) {
  return { id, img, name, location };
}

const rows = [
  createData(0, "cactus.jpg", "cactus", "kitchen"),
  createData(1, "zz.jpg", "zz plant", "livingroom"),
  createData(2, "snakePlant.jpg", "snake plant", "bathroom"),
  createData(3, "monstera.jpg", "monstera", "livingroom"),
  createData(4, "pothos.jpg", "pothos", "bedroom")
];

function preventDefault(event) {
  event.preventDefault();
}

// const useStyles = makeStyles(theme => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));

export default function FullTable() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <h1>My Plants：</h1>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            // <Link href= {"/plants/" + row.id} onClick={preventDefault}>
              <NavLink to={"/plants/" + row.id} data-some-attribute="some-value">

              <TableRow key={row.id}>
                <TableCell>{row.img}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.location}</TableCell>
                {/* <TableCell align="right">{row.amount}</TableCell> */}
              </TableRow>

              </NavLink>
            // </Link>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more plants
        </Link>
      </div>
    </TableContainer>
  );
}
