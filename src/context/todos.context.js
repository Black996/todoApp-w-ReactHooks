import React, { createContext } from 'react';
import todoReducer from "../reducers/todo.reducer";
import useLocalStorageStateReducer from "../hooks/useLocalStorageReducer";

const defaultTodos = [
    { id: 1, task: "Install Ubuntu", completed: false },
    { id: 2, task: "Play Darksouls", completed: true }
]

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageStateReducer("todos", defaultTodos, todoReducer);

    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
