import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Welcome from './pages/welcome';
import Help from './pages/help';
import Game from './pages/game';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
function App() {
  return (
    <div>
       <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
