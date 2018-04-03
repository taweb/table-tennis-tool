import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header>Table Tennis Tournament Generator Tool</header>
      <Switch>
        <Route exact path="/" component={ CollectPlayers } />
        <Route exact path="/tournament" component={ ShowTournament } />
        <Route component={ FourOhFour } />
      </Switch>
    </div>
  </Router>
);

export default App;
