import PropTypes from 'prop-types';
import { Component } from 'react';
import { FieldSet, ContactButton } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleStateInput = e => {
    
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  addContact = e => {
    e.preventDefault();

    this.props.check(this.state.name) === undefined
      ? this.props.submitForm(this.state)
      : alert('This name exists yet.Try again!');

    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.addContact}>
        <FieldSet>
          <label htmlFor="inputName">Name </label>

          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleStateInput}
            id="inputName"
            required
          />

          <label htmlFor="inputNumber">Number</label>

          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleStateInput}
            id="inputNumber"
            required
          />

          <ContactButton type="submit">Add contact</ContactButton>
        </FieldSet>
      </form>
    );
  }
}
ContactForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
