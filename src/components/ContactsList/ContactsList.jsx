import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = ({ contacts, filter, onDeleteBtnClick }) => {
  return (
    <ul>
      {contacts.map(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) && (
            <ContactItem
              key={contact.id}
              contact={contact}
              onBtnClick={onDeleteBtnClick}
            />
          )
      )}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ContactsList;
