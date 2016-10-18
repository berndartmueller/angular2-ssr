import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {
	todos: Todo[] = [];
	lastId: number = -1;

	addTodo(todo: Todo): TodoService {
		if (!todo.id) {
			todo.id = ++this.lastId;
		}

		this.todos.push(todo);
		
		return this;
	}

	getTodos(): Todo[] {
		return this.todos;
	}

	toggleComplete(todo: Todo): Todo {
		return this.updateTodoById(todo.id, {
			complete: !todo.complete
		});
	}

	private getTodoById(id: number): Todo {
		return this.todos.filter(todo => todo.id === id).pop();
	}

	private updateTodoById(id: number, values: Object = {}) {
		let todo = this.getTodoById(id);

		if (!todo) {
			return null;
		}

		Object.assign(todo, values);
		
		return todo;
	}
}