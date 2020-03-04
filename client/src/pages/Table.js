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
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
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
function createData(img, name, location) {
  return { img, name, location };
}
// placeholder data
const rows = [
  createData("cactus.jpg", "cactus", "kitchen"),
  createData("zz.jpg", "zz plant", "livingroom"),
  createData("snakePlant.jpg", "snake plant", "bathroom"),
  createData("monstera.jpg", "monstera", "livingroom"),
  createData("pothos.jpg", "pothos", "bedroom")
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
      <h1>All Plants：</h1>
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
            // <NavLink> to Specify Which Element in a Navigation Bar Is Active
            <TableRow key={row.name}>
              <TableCell><NavLink to={"/plants/" + row.name} data-some-attribute="some-value">{row.img}</NavLink></TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.location}</TableCell>
              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
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
