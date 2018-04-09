import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './CardList/CardList';
import Form from './Form/Form';
import { Navbar } from './Navbar/Navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  onUsersOutput(users) {
    this.setState({
      users: users
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GitHub Profile Searcher</h1>
        </header>
        <p className="App-intro">
          Search For Github Profiles
        </p>
        <div className="Form">
          <Form changeUsers={this.onUsersOutput.bind(this)} />
        </div>
        <div className="Card">
          <CardList cards={users} />
        </div>
      </div>
    );
  }
}

export default App;
