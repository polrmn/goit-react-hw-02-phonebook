import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const FilterContacts = ({ onInputChange, value }) => {
  const filterInputId = nanoid();

  return (
    <>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        onChange={onInputChange}
        value={value}
        id={filterInputId}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

FilterContacts.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterContacts;
