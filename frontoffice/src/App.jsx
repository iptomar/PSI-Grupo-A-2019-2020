import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFoundPage from "./pages/404";
import Register from "./pages/register";
import Login from "./pages/login";
import HomePage from "./pages/homepage";
import Users from "./pages/users";
import Profile from "./pages/profile_old";
import Routes from "./pages/routes";
import Create from "./pages/create";


class App extends React.Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/users/register" component={Register}></Route>
          <Route exact path="/users" component={Users}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/routes" component={Routes}></Route>
          <Route exact path="/routes/create" component={Create}></Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
