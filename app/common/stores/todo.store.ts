import {createStore} from 'redux';
import {todoReducer, IState} from '../reducers/todo.reducer';
import {ITodoAction} from '../actions/todo.actions';
import {Todo} from '../models/todo';

export class TodoStore {
	store: Redux.Store<IState>;

	constructor() {
		let o: IState = <IState>{
			todos: new Array<Todo>()
		};

		this.store = createStore(todoReducer, o);
	}

	dispatch(action: ITodoAction) {
		this.store.dispatch(action);
	}
}