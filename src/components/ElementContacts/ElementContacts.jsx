import PropTypes from 'prop-types';
import {  ButtonItem } from './ElementContacts.styled';
export const ElementContacts = ({ id, name, number, deleteButton }) => {
  return (
    <>
      <p>{name}:</p>
      <p>{number}</p>
      <ButtonItem
        type="button"
        onClick={() => {
          deleteButton(id);
        }}
      >
        Delete
      </ButtonItem>
    </>
  );
};

ElementContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteButton: PropTypes.func.isRequired,
};
