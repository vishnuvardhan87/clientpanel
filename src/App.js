import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import AddContact from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container"> 
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/client/add" component={AddContact} />
              <Route exact path="/client/:id" component={ClientDetails} />
              <Route exact path="/client/edit/:id" component={EditClient} />
              <Route exact path="/login" component={Login} />
            </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
