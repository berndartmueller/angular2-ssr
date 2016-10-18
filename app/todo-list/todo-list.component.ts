import {Component, Inject} from '@angular/core';

import {TodoStore} from '../common/stores/todo.store'
import {TodoActions} from '../common/actions/todo.actions'
import {Todo} from '../common/models/todo'

@Component({
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoList {
	todos: Todo[] = [];

	constructor(private todoStore: TodoStore, private todoActions: TodoActions) {
		this.todoStore.store.subscribe(() => {
			this.todos = this.todoStore.store.getState().todos;
		})
	}

	toggleTodoComplete(todo: Todo) {
		this.todoStore.dispatch(
			this.todoActions.toggleTodoComplete(todo.id)
		);
	}

	deleteTodo(todo: Todo) {
		this.todoStore.dispatch(
			this.todoActions.deleteTodo(todo.id)
		)
	}
}