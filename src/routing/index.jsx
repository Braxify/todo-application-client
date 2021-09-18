import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from '../components/Header/Header';

// Routing
import ProtectedRoute from './ProtectedRoute';

// Pages
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';

function Routing() {
  return (
    <Router>
      <Header />
      <Switch>
        <ProtectedRoute exact path="/" component={Home} title="Home" />
        <Route exact path="/login">
          <Login title="Login" />
        </Route>
        <Route exact path="/register">
          <Register title="Register" />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing;
