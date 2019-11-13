import React from "react";
import { Link } from "react-router-dom";
import { LoginCard, Form, MatTextField } from "../form/AuthForm";
import { MatButton } from "../../common/components/Button";

function Signup() {
  return (
    <LoginCard>
      <Form>
        <MatTextField type="email" placeholder="email" />
        <MatTextField type="password" placeholder="password" />
        <MatTextField type="password" placeholder="password again" />
        <MatButton>Sign Up</MatButton>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </LoginCard>
  );
}

export default Signup;
