import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader';
import ContactList from './ContactList';
import NewContactContainer from './NewContactContainer';
import ActualDateContainer from './ActualDateContainer';
import UsersListContainer from './UsersListContainer';
import Button from './Button'

class App extends Component {
  state = {
    contacts: null
  }

  componentDidMount() {
    this.fetchContacts();
  }

  // fetchContacts = () => {
  //   this.setState ({
  //     contacts: null
  //   })
  //   fetch("https://randomuser.me/api/?format=json&results=10")
  //     .then(res => res.json())
  //     .then(json => this.setState({ contacts: json.results }));
  // }

  fetchContacts = () => {
    this.setState ({
      contacts: null
    })
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => {
        if (res.ok) {
          return  res.json();
        }
        else {
          throw new Error("Connection issue")
        }
      })
      .then(json => this.setState ({
        contacts: json.results
      }))
      .catch(error => console.log("ERROR: ", error))
  }

  
  render() {
    const contacts = this.state.contacts;
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader onButtonClick={this.fetchContacts}/>
        </header>
        <main className="ui main text container">
          {contacts ? <ContactList contacts={contacts} /> : "Loading..."}
           <NewContactContainer />
          <ActualDateContainer />
          <UsersListContainer />
        </main>
      </div>
    );
  }
}

export default App;
