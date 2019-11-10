import { observable } from 'mobx';

export default class TodoStore {
    Id: number;
    @observable Task: string;
    @observable Done: boolean;

    constructor(task: string, done: boolean = false) {
        this.Id = Math.random();
        this.Task = task;
        this.Done = done;
    }
}