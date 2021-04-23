import useLocalStorageState from "./useLocalStorageState";

const useTodoState = initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos)

    return {
        todos
    }
}

export default useTodoState;