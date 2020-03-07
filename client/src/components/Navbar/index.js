<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> 9f1ad778e15f4d035d7999e44dc3a89b633c34c5
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
//import Container from '@material-ui/core/Container';
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FaceIcon from "@material-ui/icons/Face";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
=======
import { withRouter } from "react-router-dom";
>>>>>>> 9f1ad778e15f4d035d7999e44dc3a89b633c34c5

const useStyles = makeStyles({
  root: {
    //width: 500,
    width: "0",
    position: "fixed",
    alignContent: "center",
    bottom: 0
    //marginTop: 150,
  }
});

<<<<<<< HEAD
/*
function HomeButton() {
  return (<BottomNavigationAction label="" value="" href="/" icon={<HomeIcon />} />);
}
function AddPlant() {
  return (<BottomNavigationAction label="" value="Name" href="/name" icon={<AddCircleIcon />} />);
}
function User() {
  return (<BottomNavigationAction label="" value="Profile" href="/table" icon={<FaceIcon />} />);
}
*/

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

=======
const Navbar = withRouter(({ history }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#009688" }; //teal
  };

>>>>>>> 9f1ad778e15f4d035d7999e44dc3a89b633c34c5
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label=""
        value="Index"
        icon={<HomeIcon />}
        to="/"
        component={Link}
        style={isActive(history, "/")}
      />
      <BottomNavigationAction
        label=""
        value="Name"
        to="name"
        icon={<AddCircleIcon />}
        component={Link}
        style={isActive(history, "/name")}
      />
      <BottomNavigationAction
        label=""
        value="Profile"
        to="table"
        icon={<FaceIcon />}
        component={Link}
        style={isActive(history, "/table")}
      />
    </BottomNavigation>
  );
});

<<<<<<< HEAD
=======
export default Navbar;

>>>>>>> 9f1ad778e15f4d035d7999e44dc3a89b633c34c5
/*
    <Container>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Route path={["/name", "/location", "/WaterSchedule", "/notes"]} component={HomeIcon} />
        <Route path="/table" component={AddPlant} />
        <Route path={["/name", "/location", "/WaterSchedule", "/notes"]} component={FaceIcon} />
      </BottomNavigation>
    </Container>
  );
}
<<<<<<< HEAD
*/
=======
*/
>>>>>>> 9f1ad778e15f4d035d7999e44dc3a89b633c34c5
