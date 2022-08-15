import { PFilter, Input } from './Filter.styled';
import { filterUser } from 'redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const formSubmitFilter = event =>
    dispatch(filterUser(event.currentTarget.value));

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
