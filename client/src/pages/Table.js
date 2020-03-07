import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { NavLink } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/logo.png";
import axios from "axios";
import authContext from "../authContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  seeMore: {
    marginTop: theme.spacing(3)
  },
  img: {
    marginTop: theme.spacing(6)
  }
}));

export default function FullTable() {
  const [plants, setPlants] = useState([]);
  const { user } = useContext(authContext);

  useEffect(() => {
    const id = user.id;
    axios.get("/api/users/plants/" + id).then(res => {
      setPlants(res.data);
    });
  }, []);

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.paper}>
      <CssBaseline />
      <h1>Overview</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plants.map(plant => (
              <TableRow
                key={plant._id}
                hover
                component={Link}
                to={"plant/" + plant._id}
              >
                <TableCell component="th" scope="row" align="center">
                  <img
                    src={plant.plantImage}
                    style={{ width: "75px", height: "75px" }}
                  ></img>
                </TableCell>
                <TableCell align="left">{plant.plantName}</TableCell>
                <TableCell align="left">{plant.plantLocation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <img src={Logo} style={{ width: 100 }} alt="" className={classes.img} />
      </TableContainer>
    </Container>
  );
}

// import React from 'react';
// import MaterialTable from 'material-table';

// export default function MTable() {
//   const [state, setState] = React.useState({
//     columns: [
//       { title: 'Plant Name', field: 'name' },
//       { title: 'Location', field: 'location' },
//       { title: 'Start Date', field: 'startDate', type: 'date' },
//       { title: 'Water Period (days)', field: 'waterPeriod', type: 'numeric' },
//     ],
//     data: [
//         {name: 'Golden Pothos', location: 'Kitchen', startDate: '02/20/2020', waterPeiod: 14},
//         {name: 'ZZ Plant', location: 'Living Room', startDate: '02/22/2020', waterPeiod: 30},
//         {name: 'Monstera', location: 'Bed Room', startDate: '02/29/2020', waterPeiod: 10},
//         {name: 'Aloe', location: 'Living Room', startDate: '02/18/2020', waterPeiod: 25},
//     ],
//   });

//   return (
//     <MaterialTable
//       title="My Plants"
//       columns={state.columns}
//       data={state.data}
//       editable={{
//         onRowAdd: newData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.push(newData);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//         onRowUpdate: (newData, oldData) =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               if (oldData) {
//                 setState(prevState => {
//                   const data = [...prevState.data];
//                   data[data.indexOf(oldData)] = newData;
//                   return { ...prevState, data };
//                 });
//               }
//             }, 600);
//           }),
//         onRowDelete: oldData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.splice(data.indexOf(oldData), 1);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//       }}
//     />
//   );
// }
