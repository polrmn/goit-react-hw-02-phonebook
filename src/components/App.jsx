import { nanoid } from "nanoid";
import { Component } from "react";
import AddNewContact from './AddNewContact/AddNewContact'
import FilterContacts from "./FilterContacts/FilterContacts";
import ContactsList from "./ContactsList/ContactsList";

export class App extends Component {
  
  

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = ({name, number}) => {
    const newContact = {
      name,
      number,
      id: nanoid()
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterInputChange = event => {
    this.setState({filter: event.target.value})

  }

  render() {
    return (
      <>
        <AddNewContact onFormSubmit={this.handleFormSubmit} />
        {this.state.contacts.length > 0 && <h1>Contacts</h1>}
        <FilterContacts
          onInputChange={this.handleFilterInputChange}
          value={this.state.filter}
        />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </>
    );
  }
}
