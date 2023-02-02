import ContactItem from "components/ContactItem/ContactItem";

const ContactsList = ({contacts, filter}) => {
    return (
      <ul>
        {contacts.map(
          contact =>
            contact.name
              .toLowerCase()
              .includes(filter.toLowerCase()) && <ContactItem contact={contact}/>
        )}
      </ul>
    );
}

export default ContactsList;