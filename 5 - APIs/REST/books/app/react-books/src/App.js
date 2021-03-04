import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Login from './components/Login';
import Books from './components/Books';

function App() {

  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Books React App</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;