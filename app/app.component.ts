import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<h1>Das ist meine erste Angular2 App!!</h1>'
})
export class AppComponent { 
	Constructor(){
		console.log("asdf");
	}
}