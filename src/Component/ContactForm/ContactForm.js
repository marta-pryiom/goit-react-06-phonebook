import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const contact = {
            id: uuidv4(),
            name,
            number,
        };
        onSubmit(contact);
        reset();
    };

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <div className={s.Box}>
            <form className={s.Form} onSubmit={handleSubmit}>
                <label className={s.Label}>
                    Name
                    <input
                        className={s.Input}
                        value={name}
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={handleChange}
                    />
                </label>

                <label className={s.Label}>
                    Number
                    <input
                        className={s.Input}
                        type="tel"
                        value={number}
                        name="number"
                        placeholder="Enter number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={handleChange}
                    />
                </label>

                <button className={s.Btn} disabled={name.length === 0}>
                    Add contact
                </button>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleAgreeChange: PropTypes.func,
    nameId: PropTypes.number,
    numberId: PropTypes.number,
    agreeId: PropTypes.number,
};

export default ContactForm;
