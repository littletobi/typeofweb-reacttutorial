import * as actions from '../actions';

export const seedDataReducer = (state = 'default-seed', action) => {
    switch (action.type) {
        case actions.CHANGE_SEED:
            return action.seed;
        default:
            return state;

    }
}


// const initialState = {
//     seed: 'default-seed',
// }
// export const seedDataReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actions.CHANGE_SEED:
//             return { ...state, seed: action.seed }
//         default:
//             return state;

//     }
// }
