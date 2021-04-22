import React from 'react';
import { Paper, TextField } from '@material-ui/core'
import useInputState from "./hooks/useInputState";


function TodoForm({ addTodo }) {

    const [value, updateValue, reset] = useInputState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(value)
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