import { createStore } from 'redux';
import counter from './reducers/counter';

const initialState = { value: 0 };

const store = createStore(counter, initialState);

export default store;
