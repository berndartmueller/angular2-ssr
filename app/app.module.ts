import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {APP_DECLARATIONS} from './app.declarations';
import {AppComponent} from './app.component';
import {TodoService} from './common/todo.service';

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, ...APP_DECLARATIONS],
	bootstrap: [AppComponent],
	providers: [TodoService]
})
export class AppModule { }