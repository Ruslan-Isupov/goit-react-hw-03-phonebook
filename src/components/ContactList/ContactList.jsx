import PropTypes from 'prop-types';
import { ContactsList, ContactItmem } from './ContactList.styled';
import { ElementContacts } from 'components/ElementContacts/ElementContacts';
export const ContactList = ({ contacts, del }) => {
  return (
    <ContactsList>
      {contacts.map(contact => {
        return (
          <ContactItmem key={contact.id}>
            <ElementContacts
              deleteButton={del}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </ContactItmem>
        );
      })}
    </ContactsList>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  del: PropTypes.func.isRequired,
};
