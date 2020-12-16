import './App.css';
import React from 'react';
import Signup from './components/Signup'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
