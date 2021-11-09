import { useState, useEffect } from 'react';
import s from './App.module.css';
import { v4 as uuidv4 } from 'uuid';
import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import contactsArray from '../../contacts.json';
// import { useHookLocalStorage } from '../../hooks/useHookLocalStorage';

function App() {
    // const [contacts, setContacts] =
    //     useHookLocalStorage('contacts') ?? contactsArray;
    const [filter, setFilter] = useState('');

    /*без hook-localStorage */
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(localStorage.getItem('contacts')) ?? contactsArray;
    });

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const formSubmit = info => {
        const searchSameName = contacts
            .map(el => el.name.toLowerCase())
            .includes(info.name.toLowerCase());
        if (searchSameName) {
            return alert(`${info.name} is already in contacts`);
        } else {
            const newContact = { ...info, id: uuidv4() };
            setContacts([newContact, ...contacts]);
        }
    };
    const setFilteredContacts = e => {
        setFilter(e.target.value);
    };

    const getVisibleContact = () => {
        console.log(contacts);
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    const deleteContact = contactId => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
    };
    return (
        <Container>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm onSubmit={formSubmit} />
            <h2 className={s.title}>Contacts</h2>
            <Filter filter={filter} onChange={setFilteredContacts} />
            <ContactList
                contacts={getVisibleContact()}
                onDeleteContact={deleteContact}
            />
        </Container>
    );
}

export default App;
