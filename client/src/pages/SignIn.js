import React, { useState, useContext, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import authContext from "../authContext";
import teal from "@material-ui/core/colors/teal";

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
    marginTop: theme.spacing(1)
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

export default function SignIn(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    errors: {}
  });

  const { errors, loginUser, isAuthenticated } = useContext(authContext);

  const classes = useStyles();

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email: state.email,
      password: state.password
    };

    loginUser(userData);
  };

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/Welcome"); // Re-directs to Welcome page if user successfully logs in
    }
  }, [isAuthenticated]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <NaturePeopleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <span className={classes.error}>{errors.error}</span>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            autoFocus
          />
          <span className={classes.error}>{errors.email}</span>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            onChange={handleChange}
            type="password"
          />
          <span style={{ display: "block" }} className={classes.error}>
            {errors.password}
          </span>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ color: "#fff", background: teal[500] }}
            className={classes.submit}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2" className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="SignUp" variant="body2" className={classes.link}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
