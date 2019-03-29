import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import ContactList from './ContactList';
import NewContactContainer from './NewContactContainer';
import ActualDateContainer from './ActualDateContainer';
import UsersListContainer from './UsersListContainer';
import { connect } from "react-redux";
import ContactsFilter from './ContactsFilter.js';
import { getFilteredContacts } from './redux/selectors/getFilteredContacts';
import * as actions from './redux/actions';
import { SeedPickerContainer } from './SeedPicker';


class App extends Component {

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    this.props.getData();
  }
  
  render() {
    const {isLoading, isError, contacts } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader onButtonClick={this.fetchContacts} />
        </header>
        <main className="ui main text container">
          <ContactsFilter />
          { (isLoading) ? "Loading..." : (isError) ? 'Error' : <ContactList contacts={contacts} /> }
          <SeedPickerContainer />
          <NewContactContainer />
          <ActualDateContainer />
          <UsersListContainer />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.fetchDataReducer,
    contacts: getFilteredContacts(state.fetchDataReducer.contacts, state.searchContactsReducer)//state.fetchDataReducer.contacts.results
  }
};
  


const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(actions.getData())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);