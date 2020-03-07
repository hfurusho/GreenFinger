import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/logo.png";
import teal from "@material-ui/core/colors/teal";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontFamily: "Montserrat",
    color: "teal"
  },
  intro: {
    fontSize: 14,
    color: "teal"
  },
  submit: {
    margin: theme.spacing(12, 0, 2)
  },
  link: {
    color: "teal"
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <img src={Logo} style={{ width: 80 }} alt="logo" />
        <h1 className={classes.title}>
          {" "}
          <strong>Thrive</strong>
        </h1>
        {/* variant="h5" style={{ fontFamily: 'Montserrat, sans-serif;' }} */}

        <p className={classes.intro}>
          Track water schedules for your houseplants
        </p>

        <Button
          to="SignUp"
          type="submit"
          variant="contained"
          style={{ color: "#fff", background: teal[500] }}
          className={classes.submit}
          component={Link}
        >
          Get Started with Thrive
        </Button>

        <Grid container justify="center">
          <Grid item>
            <Link to="SignIn" variant="body2" className={classes.link}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
