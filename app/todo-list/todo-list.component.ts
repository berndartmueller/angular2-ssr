import {Component, Inject} from '@angular/core';

import {TodoService} from '../common/todo.service'
import {Todo} from '../common/todo'

@Component({
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoList {
	constructor(private todoService: TodoService) {}

	get todos() {
		return this.todoService.getTodos();
	}

	toggleTodoComplete(todo: Todo) {
		this.todoService.toggleComplete(todo);
	}
}