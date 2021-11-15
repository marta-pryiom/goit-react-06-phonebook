import s from './ContactList.module.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContact } from '../../redux/selectors';

function ContactList() {
    const contacts = useSelector(getVisibleContact);
    const dispatch = useDispatch();

    return (
        <ul className={s.ContactList}>
            {contacts.map(({ name, number, id }) => (
                <li key={id} id={s.ContactItem}>
                    <p className={s.Text}>{name}:</p>
                    <p className={s.Text}>{number}:</p>
                    <button
                        type="button"
                        onClick={() => dispatch(deleteContacts(id))}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ContactList;
// const getVisibleContact = (allItems, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return allItems.filter(({ name }) =>
//         name.toLowerCase().includes(normalizedFilter),
//     );
// };
// const mapStateToprops = state => ({
//     contacts: getVisibleContact(state.items, state.filter),
// });
// const mapDispatchToProps = dispatch => ({
//     onDeleteContact: id => dispatch(deleteContacts(id)),
// });
// export default connect(mapStateToprops, mapDispatchToProps)(ContactList);
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//             id: PropTypes.string.isRequired,
//         }),
//     ),

//     onDeleteContact: PropTypes.func.isRequired,
// };
