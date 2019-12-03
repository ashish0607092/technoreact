import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./components/home/Home";
import Admin from "./components/admin/Admin";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { useSelector } from 'react-redux';
function App(props) {
  const [authTokens, setAuthTokens] = useState();
  const loggedIn = useSelector(state => { return state.isLoggedIn })
  console.log(loggedIn);
  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };
  return (
    <AuthContext.Provider
      value={{ authTokens: authTokens, setAuthTokens: setTokens }}
    >
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/admin" component={Admin} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
