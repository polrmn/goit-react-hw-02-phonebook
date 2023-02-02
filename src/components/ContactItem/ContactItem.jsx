import PropTypes from 'prop-types';
import React from 'react';

const ContactItem = ({ contact, onBtnClick }) => {
  const { id, name, number } = contact;
  return (
    <li key={id}>
      {name}: {number}
      <button onClick={() => onBtnClick(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onBtnClick: PropTypes.func.isRequired
};

export default ContactItem;
