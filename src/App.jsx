import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch, 
} from "react-router-dom";

import FourOhFour from "./components/FourOhFour";
import CollectPlayers from "./containers/players/CollectPlayers";
import ShowTournament from "./containers/tournament/ShowTournament";
import Header from "./components/display/Header";
import Footer from "./components/display/Footer";


import "./App.css";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ CollectPlayers } />
        <Route exact path="/tournament" component={ ShowTournament } />
        {/* default 404 component if path not found */}
        <Route component={ FourOhFour } />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
