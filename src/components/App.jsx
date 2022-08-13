import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  // const initialContacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse.localStorage.getItem('contacts') ?? initialContacts
  // );

  const [contacts, setContacts] = useState(() => {
    return localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const searchName = contacts.find(item => item.name === contact.name);
    if (searchName) {
      alert(`${contact.name}  is already in contacts`);
    } else if (setContacts(ps => [...ps, contact])); // adding a new contact
  };

  const handleChangeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const getVisableContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    ); //checking: does the name includes filter's value
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  //от борабтного оставляем все элементы кроме того который выбрали удалить.

  // const handleDelete = id => {
  //   setContacts(({ contacts }) => {
  //     const index = contacts.findIndex(el => el.id === id);
  //     const newArray = [
  //       ...contacts.slice(0, index),
  //       ...contacts.slice(index + 1),
  //     ];
  //     return {
  //       contacts: newArray,
  //     };
  //   });
  // };

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className="title">Contacts</h2>
      <Filter filter={filter} formSubmitFilter={handleChangeFilter} />
      <ContactList
        contactList={getVisableContacts()}
        deleteContact={handleDelete}
      />
    </>
  );
};
