import { observable, computed, action } from 'mobx';
import TodoStore from './Todo.store';

export default class AppStore {
    @observable TodoList: TodoStore[] = [];

    @computed
    get taskDoneCount() {
        return this.TodoList.filter(x => x.Done).length;
    }

    constructor() {
        this.TodoList = this.Init();
    }

    @action.bound
    addTask() {
        this.TodoList.push(new TodoStore('ddd', true));
    }

    @action.bound
    RemoveTask(id: number) {
        this.TodoList = this.TodoList.filter(x => x.Id != id);
    }

    private Init() {
        let list: TodoStore[] = [];
        list.push(new TodoStore('aaa'));
        list.push(new TodoStore('bbb', true));
        list.push(new TodoStore('ccc'));
        return list;
    }
}

