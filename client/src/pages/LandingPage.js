import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Logo } from "../assets/logo.jpg";
import { lightGreen } from "@material-ui/core/colors";
// import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: { lightGreen }
  },
  submit: {
    margin: theme.spacing(2, 0, 2)
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{Logo}</Avatar>
        <Typography component="h1" variant="h5">
          GreenThumb
        </Typography>
        <Button
          type="submit"
          href="/name"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Get Started
        </Button>

        <h3>Sign Up/ Sign In</h3>
        <Grid container justify="center">
          <Grid item>
            <Link href="SignUp" variant="body2">
              Sign up
            </Link>
            <p> | </p>
            <Link href="SignIn" variant="body2">
              Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
