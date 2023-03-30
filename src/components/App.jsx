import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contactsFromStorage = JSON.parse(localStorage.getItem("contacts"))
    if (contactsFromStorage) {
      this.setState({ contacts: contactsFromStorage })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.contacts)
    console.log(this.state.contacts)
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    } 
  }
  formSubmitHandler = data => {
    const elementContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [elementContact, ...prevState.contacts],
    }));
  };

  checkSameName = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };
  deleteContact = id => {
    const deletedContact = this.state.contacts.filter(contact => {
      return contact.id !== id;
    });
    this.setState({ contacts: deletedContact });
  };
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const valueFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          submitForm={this.formSubmitHandler}
          check={this.checkSameName}
          contacts={contacts}
        />

        <h2>Contacts</h2>
        <Filter valueFilter={filter} inputFilter={this.changeFilter} />
        <ContactList contacts={valueFilter} del={this.deleteContact} />
      </>
    );
  }
}
