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
import AddPointToRoute from "./pages/addpointtoroute";
import Create from "./pages/create";
import InsertPoint from "./pages/createPoint";
import Points from "./pages/points";
import UpdatePoint from './pages/updatePoint';
import Images from './pages/image';
import AddImages from './pages/addimages';
import AddRoute from './pages/addroute';
import UpdateRoute from './pages/updateRoute';

const ApiPath = "http://localhost:3000/"

class App extends React.Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/Login" render={(props) => <Login {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/Register" render={(props) => <Register {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/Users" render={(props) => <Users {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/CreatePoint" render={(props) => <InsertPoint {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/UpdatePoint" render={(props) => <UpdatePoint {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/Profile" render={(props) => <Profile {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/Routes" render={(props) => <Routes {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/UpdateRoute" render={(props) => <UpdateRoute {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/AddRoute" render={(props) => <AddRoute {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/AddPointToRoute" render={(props) => <AddPointToRoute {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/MyPoints" render={(props) => <Points {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/Create" render={(props) => <Create {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/Image" render={(props) => <Images {...props} ApiPath={ApiPath} />}></Route>
          <Route exact path="/AddImages" render={(props) => <AddImages {...props} ApiPath={ApiPath} />}></Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
