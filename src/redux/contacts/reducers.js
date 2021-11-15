import { createReducer } from '@reduxjs/toolkit';
// import types from '../types';
// import { v4 as uuidv4 } from 'uuid';
import contacts from '../../contacts.json';
import { submit, deleteContacts, filteredContacts } from './actions';

/* ToolKit */
export const items = createReducer([...contacts], {
    [submit]: (state, { payload }) => {
        const searchSameName = state
            .map(el => el.name.toLowerCase())
            .includes(payload.name.toLowerCase());
        if (searchSameName) {
            return alert(`${payload.name} is already in contacts`);
        } else {
            return [payload, ...state];
        }
    },
    [deleteContacts]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

export const filter = createReducer('', {
    [filteredContacts]: (_, { payload }) => payload,
});

// export default combineReducers({
//     items,
//     filter,
// });
// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.FILTER:
//             return payload;
//         default:
//             return state;
//     }
// };

// const items = (state = [...contacts], { type, payload }) => {
//     console.log(state);
//     switch (type) {
//         case types.ADD:
//             const searchSameName = state
//                 .map(el => el.name.toLowerCase())
//                 .includes(payload.name.toLowerCase());
//             if (searchSameName) {
//                 return alert(`${payload.name} is already in contacts`);
//             } else {
//                 return [payload, ...state];
//             }

//         case types.DELETE:
//             return state.filter(({ id }) => id !== payload);
//         default:
//             return state;
//     }
// };

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.FILTER:
//             return payload;
//         default:
//             return state;
//     }
// };
