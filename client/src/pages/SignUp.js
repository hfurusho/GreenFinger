import React, { useState, useEffect, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
// import Box from '@material-ui/core/Box';
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import authContext from "../authContext";
import teal from "@material-ui/core/colors/teal";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "teal"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  link: {
    color: "teal"
  },
  error: {
    color: "red"
  }
}));

export default function SignUp(props) {
  const [localState, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  });

  const { errors, registerUser } = useContext(authContext);

  const handleChange = e => {
    setState({ ...localState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newUser = {
      name: localState.firstName + " " + localState.lastName,
      email: localState.email,
      password: localState.password,
      password2: localState.password2
    };

    registerUser(newUser, props.history);
  };

  // useEffect(() => {
  //   setState({ ...localState, errors: errors });
  // }, []);

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <NaturePeopleIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate>
          {/* //onSubmit={handleSubmit}> */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange}
                autoFocus
              />
              <span className={classes.error}>{errors.name}</span>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
                autoComplete="email"
              />
              <span className={classes.error}>{errors.email}</span>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                onChange={handleChange}
                type="password"
                autoComplete="current-password"
              />
              <span className={classes.error}>{errors.password}</span>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password2"
                label="Confirm Password"
                name="password2"
                onChange={handleChange}
                type="password"
                autoComplete="current-password"
              />
              <span className={classes.error}>{errors.password2}</span>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ color: "#fff", background: teal[500] }}
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="SignIn" variant="body2" className={classes.link}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
