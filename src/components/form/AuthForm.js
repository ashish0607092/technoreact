import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const LoginDiv = styled.div`
  padding: 20px;
`;
const MatCard = styled(Card)`
  box-sizing: border-box;
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 188px;
`;
const MatTextField = styled(TextField)`
  padding: 5px;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 7px;
  margin-left: 13px;
`;
const Text = styled.p`
  color: #1e2533;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
`;
const LoginBtn = styled(Button)`
  border-radius: 50px !important;
  padding: 11px 34px !important;
  background-color: #0155ff;
  float: right;
`;
const BottomSection = styled.div`
  padding-top: 30px;
`;
const ClickableLink = styled.a`
  color: #1e2533;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`;
const TC = styled.p`
  color: #0155ff;
  font-size: 12px;
  text-align: center;
  padding-top: 46px;
`;

export {
  Form,
  MatCard as LoginCard,
  Error,
  MatTextField,
  Text,
  LoginDiv,
  LoginBtn,
  BottomSection,
  ClickableLink,
  TC
};
