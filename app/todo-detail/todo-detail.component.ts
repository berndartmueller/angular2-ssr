import {Component, ViewEncapsulation, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Todo} from '../common/todo';
import {TodoService} from '../common/todo.service'

@Component({
	selector: 'todo-detail',
	templateUrl: 'todo-detail.component.html',
	styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetail {
	constructor(private todoService: TodoService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe((id) => {
			console.log("params subscribe: ", id);
		});
	}
}