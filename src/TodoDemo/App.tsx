import * as React from "react";
import { observer } from "mobx-react";
import store from './App.store';
import Todo from './Todo';

const appStore = new store();

const App = () => {

    const removeTask = (id: number) => {
        appStore.RemoveTask(id);
    }

    return (
        <div>
            <p>{appStore.taskDoneCount}</p>
            <div>
                <button onClick={appStore.addTask}>AddTask</button>
            </div>
            <ul>
                {
                    appStore.TodoList.map((todo, index) => {
                        return (
                            <Todo store={todo} removeTask={removeTask} key={index} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default observer(App);