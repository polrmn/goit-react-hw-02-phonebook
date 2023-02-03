import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = ({ filterContacts, onDeleteBtnClick }) => {
  return (
    <ul>
      {filterContacts.map(
        contact =>
            <ContactItem
              key={contact.id}
              contact={contact}
              onBtnClick={onDeleteBtnClick}
            />
      )}
    </ul>
  );
};

ContactsList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteBtnClick: PropTypes.func
};

export default ContactsList;
