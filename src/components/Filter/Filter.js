import PropTypes from 'prop-types';
import { PFilter, Input } from './Filter.styled';

export const Filter = ({ filter, formSubmitFilter }) => {
  return (
    <label>
      <PFilter>Find contacts by name</PFilter>
      <Input
        type="text"
        name="name"
        value={filter}
        onChange={formSubmitFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  formSubmitFilter: PropTypes.func.isRequired,
};
