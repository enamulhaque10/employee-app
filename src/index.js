

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.scss';
import Employee from './employee';
import Home from './home';
import Redux from './redux';
import Nav from './nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/employee" component={ Employee } />
          <Route path="/home" component= { Home } />
          <Route path="/redux" component={ Redux } />
        </Switch>
      </div>
      </Router>
    )
  }
}

ReactDOM.render(
  < App />, document.getElementById('root')
)