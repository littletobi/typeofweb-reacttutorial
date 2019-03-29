import * as actions from '../actions';

const initialState = {
    isLoading: false,
    contacts: [], // poczatkowy stan to pusty obiekt zeby nie plakalo ze na null nie moze zrobic akcji
    // jak pobieram bezposrednio z api to {} jak .results to [] bo results to tablica
    isError: false
}

export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_DATA_REQUESTED:
            return { ...state, isLoading: true }
        case actions.GET_DATA_DONE:
            return { ...state, isLoading: false, contacts: action.payload.results }
        case actions.GET_DATA_FAILED:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}