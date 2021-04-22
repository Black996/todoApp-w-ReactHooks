import React from 'react';
import useInputState from "./hooks/useInputState";
import { TextField, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Close, Check } from "@material-ui/icons";

function EditTodoForm({ id, oldTask, toggleIsEditing, editTodo }) {
    const [task, updateTask, reset] = useInputState(oldTask);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        editTodo(id, task);
        reset();
        toggleIsEditing();
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ marginLeft: "1rem", width: "50%" }}>
                <TextField margin="normal" value={task} onChange={updateTask} fullWidth autoFocus />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                        <Close />
                    </IconButton>
                    <IconButton aria-label="Edit" type="submit">
                        <Check />
                    </IconButton>
                </ListItemSecondaryAction>
            </form>
        </>
    )
}

export default EditTodoForm;