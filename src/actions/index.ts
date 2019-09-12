import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ToDo {
	id: number,
	title: string,
	completed: boolean,
}

export interface FetchToDosAction {
	type: ActionTypes.fetchToDos,
	payload: ToDo[],
}

const URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchToDos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<ToDo[]>(URL);
		
		dispatch<FetchToDosAction>({
			type: ActionTypes.fetchToDos,
			payload: response.data,
		})
	};
};
