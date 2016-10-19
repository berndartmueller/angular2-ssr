import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<div>
			<todo-add></todo-add>
			<router-outlet></router-outlet>
		</div>
	`
})
export class AppComponent { 
	Constructor(){
	}
}