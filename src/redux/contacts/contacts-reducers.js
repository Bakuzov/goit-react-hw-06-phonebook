import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addUser, deleteUser, filterUser } from './contacts-actions';

export const itemReducer = createReducer([], {
  [addUser]: (state, { payload }) => [...state, payload],
  [deleteUser]: (state, { payload }) => state.filter(el => el.id !== payload),
});

export const filterReducer = createReducer('', {
  [filterUser]: (_, { payload }) => payload,
});

export const rootReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
