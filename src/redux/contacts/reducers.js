import { combineReducers } from 'redux';
import types from '../types';
// import { v4 as uuidv4 } from 'uuid';
import contacts from '../../contacts.json';

const items = (state = [...contacts], { type, payload }) => {
    console.log(state);
    switch (type) {
        case types.ADD:
            // const searchSameName = state
            //     .map(el => el.name.toLowerCase())
            //     .includes(payload.name.toLowerCase());
            // if (searchSameName) {
            //     return alert(`${payload.name} is already in contacts`);
            // } else {
            // const newContact = { ...payload, id: uuidv4() };

            // return [newContact, ...state];
            // }

            return [payload, ...state];
        // return [payload.contact, ...state];
        case types.DELETE:
            return state.filter(({ id }) => id !== payload);
        default:
            return state;
    }
};

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case types.FILTER:
            return payload;
        default:
            return state;
    }
};
export const rootReducer = combineReducers({ items, filter });
export default combineReducers({
    items,
    filter,
});
