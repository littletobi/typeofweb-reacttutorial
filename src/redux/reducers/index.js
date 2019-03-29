// Ponieważ reducerów może być wiele w aplikacji (a każdy z nich może operować na wycinku stanu), trzeba je jakoś połączyć. 
// Sluzy do tego funkcja combineReducers.
import { combineReducers } from "redux";
import { fetchDataReducer } from './fetchDataReducer';
import { searchContactsReducer } from './searchContactsReducer';
import { seedDataReducer } from './seedDataReducer';

export default combineReducers({
  fetchDataReducer,
  searchContactsReducer,
  seedDataReducer
});