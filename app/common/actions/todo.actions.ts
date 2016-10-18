export interface ITodoAction {
	type: string;
	title?: string;
	id?: number;
	completed?: boolean;
}

export class TodoActions {
	static ADD_TODO = 'ADD';
	static DELETE_TODO = 'DELETE';
	static TOGGLE_TODO_COMPLETE = 'TOGGLE_TODO_COMPLETE';

	lastTodoId: number = 0;

	constructor() {}

	addTodo(title: string): ITodoAction {
		return {
			type: TodoActions.ADD_TODO,
			id: ++this.lastTodoId,
			title
		}
	}

	deleteTodo(id: number): ITodoAction {
		return {
			type: TodoActions.DELETE_TODO,
			id: id
		}
	}

	toggleTodoComplete(id: number): ITodoAction {
		return {
			type: TodoActions.TOGGLE_TODO_COMPLETE,
			id: id
		}
	}
}