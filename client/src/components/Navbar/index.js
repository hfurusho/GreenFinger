import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FaceIcon from '@material-ui/icons/Face';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    //width: 500,
    width: '0',
    position: 'fixed',
    alignContent: 'center',
    bottom: 0,
    //marginTop: 150,
  },
});

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
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (

    
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="" value="Index" href="/" icon={<HomeIcon />} />
          <BottomNavigationAction label="" value="Name" href="name" icon={<AddCircleIcon />} />
          <BottomNavigationAction label="" value="Profile" href="table" icon={<FaceIcon />} />
        </BottomNavigation>
      );
    }
  
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
