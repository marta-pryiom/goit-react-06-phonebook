import { v4 as uuidv4 } from 'uuid';
/*ToolKit*/
import { createAction } from '@reduxjs/toolkit';

const submit = createAction('contact / add', (name, number) => {
    return {
        payload: {
            id: uuidv4(),
            name: name,
            number: number,
        },
    };
});
const deleteContacts = createAction('contact/delete');
const filteredContacts = createAction('contact/filter');

// const submit = (name, number) => ({
//     type: ADD,
//     payload: {
//         id: uuidv4(),
//         name: name,
//         number: number,
//     },
// });

// const deleteContacts = contactId => ({
//     type: DELETE,
//     payload: contactId,
// });
// const filteredContacts = value => ({
//     type:FILTER,
//     payload: value,
// });

export { submit, deleteContacts, filteredContacts };
