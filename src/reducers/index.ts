import { combineReducers } from 'redux';
import { toDosReducers } from './todos';
import { ToDo } from '../actions';

export interface StoreState {
	toDos: ToDo[],
}

export const reducers = combineReducers<StoreState>({
	toDos: toDosReducers,
});
