import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div>
			<todo-add></todo-add>
			<todo-list></todo-list>
		</div>
	`
})
export class AppComponent { 
	constructor(){}
}