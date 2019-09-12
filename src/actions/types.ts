import { DeleteToDoAction, FetchToDosAction } from './todos';

export enum ActionTypes {
	fetchToDos,
	deleteToDo,
}

export type Action = FetchToDosAction | DeleteToDoAction;
