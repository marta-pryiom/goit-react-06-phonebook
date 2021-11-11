import types from '../types';
import { v4 as uuidv4 } from 'uuid';

const submit = (name, number) => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name: name,
        number: number,
    },
});

const deleteContacts = contactId => ({
    type: types.DELETE,
    payload: contactId,
});
const filteredContacts = value => ({
    type: types.FILTER,
    payload: value,
});

export { submit, deleteContacts, filteredContacts };
