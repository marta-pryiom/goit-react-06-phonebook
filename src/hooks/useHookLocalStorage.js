import { useState, useEffect } from 'react';

export const useHookLocalStorage = (name, contactsArray) => {
    const [contacts, setContacts] = useState(
        () => JSON.parse(localStorage.getItem(name)) ?? contactsArray,
    );
    useEffect(() => localStorage.setItem(name, JSON.stringify(contacts)), [
        contacts,
        name,
    ]);
    return [contacts, setContacts];
};
