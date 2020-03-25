import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import authContext from "../../authContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    fontFamily: "Lobster",
    fontSize: 32,
    color: "teal",
    margin: "0 0"
  },
  logoutBtn: {
    color: "teal"
  },
  appBar: {
    boxShadow: "none",
    transform: "none",
    borderBottom: "1px solid black",
    backgroundColor: "inherit"
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const { logoutUser } = useContext(authContext);

  const handleLogout = () => {
    logoutUser();
    props.history.push("/");
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <h1 className={classes.title}>
              <strong>Thrive</strong>
            </h1>
            <Button className={classes.logoutBtn} onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
