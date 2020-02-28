import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FaceIcon from '@material-ui/icons/Face';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="" value="" href="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="" value="Name" href="/name" icon={<AddCircleIcon />} />
        <BottomNavigationAction label="" value="Profile" href="/user" icon={<FaceIcon />} />
      </BottomNavigation>
    </Container>
  );
}
