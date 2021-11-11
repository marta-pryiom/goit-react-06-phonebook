import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/actions';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

function ContactList({ contacts, onDeleteContact }) {
    /* винести функцію */

    console.log(contacts);
    // function ContactList() {
    // const contacts = useSelector();

    return (
        <ul className={s.ContactList}>
            {contacts.map(({ name, number, id }) => (
                <li key={id} id={s.ContactItem}>
                    <p className={s.Text}>{name}:</p>
                    <p className={s.Text}>{number}:</p>
                    <button type="button" onClick={() => onDeleteContact(id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

const getVisibleContact = (allItems, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allItems.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
};
const mapStateToprops = state => ({
    contacts: getVisibleContact(state.items, state.filter),
});
const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(deleteContacts(id)),
});
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
    ),

    onDeleteContact: PropTypes.func.isRequired,
};
export default connect(mapStateToprops, mapDispatchToProps)(ContactList);
