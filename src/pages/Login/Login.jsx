import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../store/auth/actions";
import { TextField, Button, Grid, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
import "./login.scss";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({
    success: false,
    error: false,
  });
  const store = useSelector((store) => store.auth.currentUser);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    },
    [setUser, user]
  );

  const handleSubmit = (email, password) => {
    axios
      .post(`https://winningpartner.com:26134/api/v2/login`, {
        user: {
          email: email,
          password: password,
        },
      })
      .then(({ data: { token, full_name } }) => {
        let user = {
          token: token,
          name: full_name,
          email: email,
          password: password,
          isAuth: true,
        };
        const creds = {
          email: email,
          name: full_name,
          token: token,
        };
        localStorage.setItem("user", JSON.stringify(creds));
        dispatch(loginUser(user));
        setStatus({ success: true });
      })
      .catch(({ response }) => {
        console.log(response.data);
        setStatus({ error: true });
      });
  };

  return (
    <Container className={"center-block"} maxWidth="sm">
      {Object.keys(store).length > 0 ? <Redirect to="/admin" /> : null}
      <h1 className="sign-in-title">Sign in</h1>
      <CSSTransition
        in={status.error}
        timeout={500}
        classNames="my-node"
        unmountOnExit
      >
        <Alert severity="error">Wrong login or password</Alert>
      </CSSTransition>
      <CSSTransition
        in={status.success}
        timeout={500}
        classNames="my-node"
        unmountOnExit
      >
        <Alert severity="success">Login successful</Alert>
      </CSSTransition>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(user.email, user.password);
          e.target.reset();
        }}
      >
        <Grid item xs={12}>
          <TextField
            required
            id="standard-required"
            label="Email"
            type="text"
            variant="outlined"
            name="email"
            defaultValue={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            name="password"
            defaultValue={user.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button
            size="large"
            variant="contained"
            type="submit"
            color="primary"
          >
            Sign in
          </Button>
        </Grid>
      </form>
    </Container>
  );
};
