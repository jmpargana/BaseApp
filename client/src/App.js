import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import {Router, Route, Switch} from 'react-router-dom';

import MyProvider from './components/Context';
import Family from './components/Family';

import NavBar from './components/NavBar';
import Profile from './components/Profile';
import history from './utils/history';

import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <MyProvider>
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/family" component={Family} />
          </Switch>
        </MyProvider>
      </Router>
    </div>
  );
}

export default App;
