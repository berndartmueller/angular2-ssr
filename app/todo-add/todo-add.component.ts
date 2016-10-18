import {Component, ViewEncapsulation, Inject} from '@angular/core';

import {TodoStore} from '../common/stores/todo.store'
import {TodoActions} from '../common/actions/todo.actions'

@Component({
	selector: 'todo-add',
	templateUrl: 'todo-add.component.html',
	styleUrls: ['./todo-add.component.scss']
})
export class TodoAdd {
	constructor(private todoStore: TodoStore, private todoActions: TodoActions) {}

	private addTodo(todo: HTMLInputElement) {
		this.todoStore.dispatch(
			this.todoActions.addTodo(todo.value)
		);

		todo.value = "";
	}
}