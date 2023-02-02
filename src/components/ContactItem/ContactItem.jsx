import React from 'react'

const ContactItem = ({ contact }) =>{
    const {id, name, number} = contact;
    return (
      <li key={id}>
        {name}: {number}
      </li>
    );
}
    
  
export default ContactItem;
