import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filteredContacts } from '../../redux/contacts/actions';

function Filter({ value, onChange }) {
    return (
        <div className={s.Filter}>
            <label className={s.FilterTitle}>
                Find contacts by name
                <input
                    className={s.Input}
                    type="text"
                    name="name"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

// Filter.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     filter: PropTypes.string.isRequired,
// };
const getVisibleContact = (allItems, filter) => {
    console.log(allItems);
    console.log(filter);
    // const { filter, items } = state;
    const normalizedFilter = filter.toLowerCase();
    return allItems.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
};
const mapStateToProps = state => ({
    value: getVisibleContact(state.items, state.filter),
    // value: state.filter,
});
const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(filteredContacts(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// export default Filter;
