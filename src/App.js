import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader';
import ContactList from './ContactList';
import NewContactContainer from './NewContactContainer';
import ActualDateContainer from './ActualDateContainer';
import UsersListContainer from './UsersListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <AppHeader />
        <main className="ui main text container">
          <ContactList />
          <NewContactContainer />
          <ActualDateContainer />
          <UsersListContainer />
        </main>
      </div>
    );
  }
}

export default App;
