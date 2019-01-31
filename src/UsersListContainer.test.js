import React from 'react';
import { shallow } from 'enzyme';
import UsersList from './UsersList';
import UsersListContainer from './UsersListContainer';
import Input from './Input';
import { doesNotReject } from 'assert';

const userListContainer = shallow(<UsersListContainer />)

it('should contain all names', () => {
    expect(userListContainer.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania', 'Druga Ania', 'Kate', 'Placek']);
});

describe('users filtering', () => {

    it('should contain filtered names', (done) => {
        userListContainer.find('Input').simulate('textInput', { target: { value: 'M' } });
        setTimeout(() => {
            expect(userListContainer.find('UsersList').prop('users')).toEqual(['Michal', 'Marta', 'Tomek']);
            done();
        }, 2000);
    });

    it('should contain filtered names after we clear the input', () => {
        userListContainer.find('Input').simulate('input', { currentTarget: { value: 'M' } });
        userListContainer.find('Input').simulate('input', { currentTarget: { value: '' } });

        setTimeout(() => {
            expect(userListContainer.find('UsersList').prop('users')).toEqual(['Michaal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania', 'Druga Ania', 'Kate', 'Placek']);
            done();
        }, 2000);

    });
});
