import * as React from "react";
import { observer } from "mobx-react";
import store from './Todo.store';

interface IProps {
    store?: store;
    removeTask: Function;
}

const Todo = ({ store, removeTask }: IProps) => {
    return (
        <li>
            <input
                type='checkbox'
                checked={store.Done}
                onChange={() => {
                    store.Done = !store.Done;
                }}
            />
            {store.Task}
            <button onClick={() => removeTask(store.Id)}>RemoveTask</button>
        </li>
    )
}

export default observer(Todo);
