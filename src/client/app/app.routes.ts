import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoList } from './todo-list/todo-list.component';
import { TodoDetail } from './todo-detail/todo-detail.component';

// Route Configuration
export const routes: Routes = [
	{
		path: '',
		redirectTo: '/todo',
		pathMatch: 'full'
	},
	{ 
		path: 'todo', 
		component: TodoList
	},
	{ path: 'detail/:id', component: TodoDetail }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);