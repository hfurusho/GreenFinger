import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FaceIcon from "@material-ui/icons/Face";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "0",
    position: "fixed",
    alignContent: "center",
    bottom: 0
  },
  addBtn: {
    marginBottom: theme.spacing(2)
  }
}));

const isActive = (history, path) => {
  if (history.location.pathname === path) 
    return { color: "#009688"}; //teal
};

// export default function LabelBottomNavigation(history) {
const Footer = withRouter(({ history }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState("");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <BottomNavigation
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction
        href="/"
        icon={<HomeIcon />}
        style={isActive(history, "/")}
        label=""
        value="Index"
      />
      <BottomNavigationAction
        href="name"
        icon={<AddCircleIcon />}
        style={isActive(history, "/name")}
        label=""
        value="Name"
        className={classes.addBtn}
      />
      <BottomNavigationAction
        href="table"
        icon={<FaceIcon />}
        style={
          (isActive(history, "/table"))
        }
        label=""
        value="table"
      />
    </BottomNavigation>
  );
});

export default Footer;
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
*/

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
