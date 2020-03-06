import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "../components/AddBtn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  }
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h1>Welcome plant lovers!</h1>
        <h2>Time to add a plant!</h2>
        <Button
          type="submit"
          href="Name"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add A Plant
        </Button>
      </div>
    </Container>
  );
}
