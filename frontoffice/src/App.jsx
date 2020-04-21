import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFoundPage from "./pages/404";
import Register from "./pages/register";
import Login from "./pages/login";
import HomePage from "./pages/homepage";
import Users from "./pages/users";
import Profile from "./pages/profile";
import Routes from "./pages/routes";
import Create from "./pages/create";
import InsertPoint from "./pages/createPoint";
import Points from "./pages/points";
import UpdatePoint from './pages/updatePoint';
import Images from './pages/image';

class App extends React.Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Register" component={Register}></Route>
          <Route exact path="/Users" component={Users}></Route>
          <Route exact path="/CreatePoint" component={InsertPoint}></Route>
          <Route exact path="/UpdatePoint" component={UpdatePoint}></Route>
          <Route exact path="/Profile" component={Profile}></Route>
          <Route exact path="/Routes" component={Routes}></Route>
          <Route exact path="/MyPoints" component={Points}></Route>
          <Route exact path="/Create" component={Create}></Route>
          <Route exact path="/Image" component={Images}></Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
