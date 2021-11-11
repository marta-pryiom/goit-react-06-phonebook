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

const mapStateToProps = state => ({
    value: state.filter,
});
const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(filteredContacts(e.currentTarget.value)),
});
Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
