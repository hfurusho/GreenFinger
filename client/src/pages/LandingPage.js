import React from "react";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
}));

export default function LandingPage() {
    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <h1>Index page</h1>
      <Button type="submit" href="/name" fullWidth variant="contained" color="primary" className={classes.submit}>
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
    </Container>
  );
}
