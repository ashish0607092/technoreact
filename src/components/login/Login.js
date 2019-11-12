import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Form, MatTextField, Error } from "../form/AuthForm";
import { MatButton } from "../../common/components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import "../../App.scss";
import { useAuth } from "../../context/auth";

const Login = props => {
  let { authTokens, setAuthTokens } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (localStorage.getItem("tokens")) {
    authTokens = localStorage.getItem("tokens");
    return <Redirect to="/admin" />;
  } else {
    authTokens = undefined;
  }
  console.log(authTokens);

  const handleSubmit = values => {
    try {
      if (values.email && values.password && values.email === "a@t.com") {
        setAuthTokens(values);
        setLoggedIn(true);
        props.history.push("/admin");
        values.isError = false;
      } else {
        values.isError = true;
      }
    } catch (error) {
    } finally {
    }
  };
  if (isLoggedIn) {
    return <Redirect to="/admin" />;
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        isError: false
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;

        return (
          <Card>
            <Form onSubmit={handleSubmit}>
              <MatTextField
                variant="outlined"
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                value={values.email}
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
                helperText={errors.email}
                error={errors.email && touched.email}
              />
              <MatTextField
                variant="outlined"
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
                helperText={errors.password}
                error={errors.password && touched.password}
              />
              {values.isError ? <Error>Invalid Credentials</Error> : null}
              <MatButton
                type="submit"
                disabled={isSubmitting || !(values.email && values.password)}
              >
                Sign In
              </MatButton>
            </Form>
            <br />
            <Link to="/signup">Don't have an account?</Link>
          </Card>
        );
      }}
    </Formik>
  );
};
export default Login;
