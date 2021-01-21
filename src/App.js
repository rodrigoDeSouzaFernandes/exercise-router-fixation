import React, { Component } from 'react';
import Home from './Home';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Users from './Users'
import About from './About'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Route exact path="/" component={Home}  />
        <Route exact path="/about" component={About}  />
        <Route exact path="/users" render={() => <Users greetingMessage="Good Morning" />}  />
      </BrowserRouter>
    );
  }
}

export default App;