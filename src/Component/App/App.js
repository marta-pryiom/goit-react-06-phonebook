import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

function App() {
    return (
        <Container>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={s.title}>Contacts</h2>
            <Filter />
            <ContactList />
        </Container>
    );
}

export default App;
