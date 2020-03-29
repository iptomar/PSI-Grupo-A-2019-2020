import React from 'react';
import './pages/style/App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import MainPage from "./pages/index";
import NotFoundPage from "./pages/404";
import RegisterBox from "./pages/register";
import LoginBox from "./pages/login";
import HomePage from "./pages/home";
import GetUsers from "./pages/getUsers";
import EditUser from "./pages/editUser";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={LoginBox}></Route>
          <Route exact path="/register" component={RegisterBox}></Route>
          <Route exact path="/home" component={HomePage}></Route>
          <Route exact path="/getUsers" component={GetUsers}></Route>
          <Route exact path="/editUser" component={EditUser}></Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
