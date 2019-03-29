// Store przechowuje stan calej aplikacji
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'; // domyslnie reducery z index.js
import thunk from 'redux-thunk';

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk));