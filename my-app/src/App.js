import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PersonFeed from './PersonList.js';
import PersonProfile from './PersonProfile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
          <Link to="/feed">
            <p>See Users</p>
          </Link>
            <aside>
              <Route path="/feed" component={PersonFeed}/>
            </aside>
            <main>
              <Route path="/profile" component={PersonProfile} /> 
                {/* <PersonProfile/> */}
              {/* </Route> */}
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
