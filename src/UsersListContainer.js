import React, { Component } from 'react';
import UsersList from './UsersList';
import Input from './Input';
// z braku laku istniających userów definiuję po prostu jako stałą
// w prawdziwej aplikacji pochodziliby z API i/lub byli w Reduksowym storze 
const completeListOfUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania', 'Druga Ania', 'Kate', 'Placek'];

class UsersListContainer extends Component {
    state = {
        actualUserList: completeListOfUsers
    }

    filterUsersBasedOnTextProvidedInInput = (event) => {
        const textFromInput = event.target.value;
        this.getFilteredUsersFromText(textFromInput)
        .then((filteredUsers) => {
            this.setState({
                actualUserList: filteredUsers
            });
        })
        .catch(err => console.log(err));

    }

    // NIE UŻYWAM ZAPISU STRZAŁKOWEGO BO TĘ FUNKCJE TYLKO WYWOŁUJĘ A NIE PODAJĘ JAKO PARAMETRU
    // getFilteredUsersFromText(text) {
    //     return completeListOfUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
    // }

    // wprowadzona asynchoniczność
    getFilteredUsersFromText(text) {
        return new Promise((resolve, reject) => {
            const time = (Math.random() + 1) * 250;
            setTimeout(() => {
                const filteredUsers = completeListOfUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
                resolve(filteredUsers);
            }, time);
        });
    }

    render() {
        return (
            <div>
                <Input placeholderText="User name" onTextInput={this.filterUsersBasedOnTextProvidedInInput} />
                <UsersList users={this.state.actualUserList}></UsersList>
            </div>
        );
    }
}

export default UsersListContainer;