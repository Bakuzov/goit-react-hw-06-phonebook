import { Button, ItemLi, PFilter } from './Contact.styled';
import { deleteUser } from 'redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  const { items, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteUser(id));

  const getSubmitContacts = (items, filter) => {
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactList = getSubmitContacts(items, filter);

  return (
    <ul>
      {contactList.map(({ id, name, number }) => {
        return (
          <ItemLi key={id}>
            <PFilter>
              {name} : {number}{' '}
            </PFilter>
            <Button type="button" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </ItemLi>
        );
      })}
    </ul>
  );
};
