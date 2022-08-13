import PropTypes from 'prop-types';
import { Button, ItemLi, PFilter } from './Contact.styled';

export const ContactList = ({ contactList, deleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => {
        return (
          <ItemLi key={id}>
            <PFilter>
              {name} : {number}{' '}
            </PFilter>
            <Button type="button" onClick={() => deleteContact(id)}>
              Delete
            </Button>
          </ItemLi>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
