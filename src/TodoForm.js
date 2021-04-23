import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core'
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./context/todos.context";

function TodoForm() {
    const { dispatch } = useContext(TodosContext);
    const [value, updateValue, reset] = useInputState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({ type: "ADD", task: value });
        reset();
    }

    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={handleSubmit}>
                <TextField value={value} onChange={updateValue} margin="normal" label="Add New Todo" fullWidth />
            </form>
        </Paper>

    )
}

export default TodoForm;