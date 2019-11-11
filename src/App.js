import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./components/home/Home";
import Admin from "./components/admin/Admin";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/admin" component={Admin} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
