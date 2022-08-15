import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const deleteUser = createAction('contacts/delete');
export const filterUser = createAction('contacts/filter');
export const addUser = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});
