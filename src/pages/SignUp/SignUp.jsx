import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { TextField, Button, Grid, Container } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import "./SignUp.scss";

const validate = (values) => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = "First Name is required";
  } else if (values.first_name.length > 15) {
    errors.first_name = "First Name must be 15 characters or less";
  }

  if (!values.last_name) {
    errors.last_name = "Last Name is Required";
  } else if (values.last_name.length > 20) {
    errors.last_name = "Last Name must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters or more";
  }
  if (!values.repeatPassword) {
    errors.repeatPassword = "Repeat password is Required";
  } else if (values.repeatPassword !== values.password) {
    errors.repeatPassword =
      "Your password and confirmation password do not match.";
  }
  if (!values.company_name) {
    errors.company_name = "Company is Required";
  } else if (values.company_name.length < 3) {
    errors.company_name = "Company must be 3 characters or more";
  }
  if (!values.phone_number) {
    errors.phone_number = "Phone is Required";
  } else if (values.phone_number.length < 3) {
    errors.phone_number = "Phone must be 10 characters or more";
  }
  if (!values.skype) {
    errors.skype = "Skype is Required";
  }
  if (!values.website) {
    errors.website = "Website is Required";
  }

  return errors;
};

export const SignUp = () => {
  const [status, setStatus] = useState({
    success: false,
    error: false,
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      repeatPassword: "",
      company_name: "",
      phone_number: "",
      skype: "",
      website: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(`https://winningpartner.com:26134/api/v2/user`, {
          user: {
            ...values,
          },
        })
        .then(() => {
          setStatus({ success: true });
        })
        .catch((errors) => {
          console.log(errors.message);
          setStatus({ error: true });
        });
    },
  });
  return (
    <Container className={"center-block"} maxWidth="sm">
      <h1 className="sign-in-title">Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        {status.success ? (
          <Alert severity="success">Registration Successful</Alert>
        ) : null}
        {status.error ? (
          <Alert severity="error">Registration Failed</Alert>
        ) : null}
        {Object.keys(formik.errors).length > 0 ? (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {formik.errors.first_name ? (
              <span className="alert--error">{formik.errors.first_name}</span>
            ) : null}
            {formik.errors.last_name ? (
              <span className="alert--error">{formik.errors.last_name}</span>
            ) : null}
            {formik.errors.email ? (
              <span className="alert--error">{formik.errors.email}</span>
            ) : null}
            {formik.errors.password ? (
              <span className="alert--error">{formik.errors.password}</span>
            ) : null}
            {formik.errors.repeatPassword ? (
              <span className="alert--error">
                {formik.errors.repeatPassword}
              </span>
            ) : null}
            {formik.errors.company_name ? (
              <span className="alert--error">{formik.errors.company_name}</span>
            ) : null}
            {formik.errors.phone_number ? (
              <span className="alert--error">{formik.errors.phone_number}</span>
            ) : null}
            {formik.errors.skype ? (
              <span className="alert--error">{formik.errors.skype}</span>
            ) : null}
            {formik.errors.website ? (
              <span className="alert--error">{formik.errors.website}</span>
            ) : null}
          </Alert>
        ) : null}

        <Grid
          item
          container
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <TextField
            required
            id="standard-required firstName"
            label="First Name"
            type="text"
            variant="outlined"
            name="first_name"
            defaultValue={formik.values.first_name}
            onChange={formik.handleChange}
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
          <TextField
            required
            id="standard-required lastName"
            label="Last Name"
            type="text"
            variant="outlined"
            name="last_name"
            defaultValue={formik.values.last_name}
            onChange={formik.handleChange}
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
          <TextField
            required
            id="standard-required email"
            label="Email Address"
            type="email"
            variant="outlined"
            name="email"
            defaultValue={formik.values.email}
            onChange={formik.handleChange}
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
          <TextField
            required
            id="standard-required password"
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            defaultValue={formik.values.password}
            onChange={formik.handleChange}
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
          <TextField
            required
            id="standard-required repeatPassword"
            label="Repeat password"
            type="password"
            variant="outlined"
            name="repeatPassword"
            defaultValue={formik.values.repeatPassword}
            onChange={formik.handleChange}
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
          <TextField
            required
            id="standard-required company"
            label="Company"
            type="text"
            variant="outlined"
            name="company_name"
            defaultValue={formik.values.company_name}
            onChange={formik.handleChange}
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
          <TextField
            required
            id="standard-required phone"
            label="Phone"
            type="tel"
            variant="outlined"
            name="phone_number"
            defaultValue={formik.values.phone_number}
            onChange={formik.handleChange}
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
          <TextField
            id="standard-required skype"
            label="Skype"
            type="text"
            variant="outlined"
            name="skype"
            defaultValue={formik.values.skype}
            onChange={formik.handleChange}
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
          <TextField
            id="standard-required website"
            label="Website"
            type="text"
            variant="outlined"
            name="website"
            defaultValue={formik.values.website}
            onChange={formik.handleChange}
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
            Sign Up
          </Button>
        </Grid>
      </form>
    </Container>
  );
};
