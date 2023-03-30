import PropTypes from 'prop-types';
import { FilterContainer, FilterInput } from './Filter.styled';
export const Filter = ({ valueFilter, inputFilter }) => {
  return (
    <FilterContainer>
      <label htmlFor="filter"> Filters contacts by name </label>

      <FilterInput
        type="text"
        name="filter"
        value={valueFilter}
        onChange={inputFilter}
        id="filter"
        required
      />
    </FilterContainer>
  );
};
Filter.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  inputFilter: PropTypes.func.isRequired,
};
