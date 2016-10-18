import {Component, ViewEncapsulation, Inject} from '@angular/core';

import {Todo} from '../common/todo';
import {TodoService} from '../common/todo.service'

@Component({
	selector: 'todo-add',
	templateUrl: 'todo-add.component.html',
	styleUrls: ['./todo-add.component.scss']
})
export class TodoAdd {
	constructor(private todoService: TodoService) {}

	private addTodo(todo: HTMLInputElement) {
		this.todoService.addTodo(new Todo({title: todo.value}));

		todo.value = ""
	}
}