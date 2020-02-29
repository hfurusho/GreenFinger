import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FaceIcon from '@material-ui/icons/Face';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from '../../pages/LandingPage';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function HomeButton() {
  return (<BottomNavigationAction label="" value="" href="/" icon={<HomeIcon />} />);
}

function AddPlant() {
  return (<BottomNavigationAction label="" value="Name" href="/name" icon={<AddCircleIcon />} />);
}

function User() {
  return (<BottomNavigationAction label="" value="Profile" href="/user" icon={<FaceIcon />} />);
}

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Container>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Route path={["/name", "/Location", "/WaterSchedule", "/Notes"]} component={HomeButton} />
        <Route path="/Table" component={AddPlant} />
        <Route path={["/name", "/Location", "/WaterSchedule", "/Notes"]} component={User} />
      </BottomNavigation>
    </Container>

  );
}
