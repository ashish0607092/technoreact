import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const Card = styled.div`
  box-sizing: border-box;
  max-width: 444px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 260px;
  padding-bottom: 260px;
`;
const MatTextField = styled(TextField)`
  padding: 5px;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 7px;
  margin-left: 13px;
`;

export { Form, Card, Error, MatTextField };
