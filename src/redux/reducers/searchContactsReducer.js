import * as actions from '../actions';

export const searchContactsReducer = (state = '', action) => {
    switch (action.type) {
        case actions.SEARCH_CONTACTS:
            return action.text
        default:
            return state
    }
}