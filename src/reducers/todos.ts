import { ToDo, FetchToDosAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const toDosReducers = (state: ToDo[] = [], action: FetchToDosAction) => {
	switch (action.type) {
		case ActionTypes.fetchToDos: {
			return action.payload;
		}
		
		default:
			return state;
	}
};
