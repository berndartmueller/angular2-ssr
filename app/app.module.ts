import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {APP_DECLARATIONS} from './app.declarations';
import {AppComponent} from './app.component';
import {TodoStore} from './common/stores/todo.store';
import {TodoActions} from './common/actions/todo.actions'

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, ...APP_DECLARATIONS],
	bootstrap: [AppComponent],
	providers: [
		TodoStore,
		TodoActions
	]
})
export class AppModule { }