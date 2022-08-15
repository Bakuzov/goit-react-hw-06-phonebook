import { useState } from 'react';

import { Input, Button, P } from './ContactForm.styled';

import { addUser } from 'redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items } = useSelector(state => state);
  const dispatch = useDispatch();

  const inputName = {
    name: setName,
    number: setNumber,
  };

  const handleChange = e => {
    const { name, value } = e.target;
    inputName[name](value); // inputName.number =  setNumber
  };

  const handleSubmit = event => {
    event.preventDefault();
    const searchName = items.find(item => item.name === name);
    if (searchName) {
      alert(`${name}  is already in contacts`);
    } else {
      dispatch(addUser(name, number));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <P>Name</P>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <P> Number</P>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
