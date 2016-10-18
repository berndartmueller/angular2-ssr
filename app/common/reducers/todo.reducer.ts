import {Todo} from '../models/todo';
import {ITodoAction, TodoActions} from '../actions/todo.actions';

export interface IState {
	todos: Todo[]
}

export function todoReducer (state: IState = <IState>{}, action: ITodoAction): IState {
	switch (action.type) {
		case TodoActions.ADD_TODO:
			state.todos.push(new Todo({id: action.id, title: action.title}));
			
			return state;

		case TodoActions.DELETE_TODO:
			state.todos = [...state.todos.filter(todo => todo.id !== action.id)];
			
			return state;

		case TodoActions.TOGGLE_TODO_COMPLETE:
			for (let todo of state.todos) {
				if (todo.id === action.id) {
					todo.complete = !todo.complete;
				}
			}
			
			return state;

		default:
			return state;
	}
}