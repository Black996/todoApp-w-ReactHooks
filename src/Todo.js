import React, { useContext, memo } from 'react';
import useToggleState from "./hooks/useToggleState";
import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './context/todos.context';

function Todo({ task, completed, id }) {
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggleIsEditing] = useToggleState(false);

    return (
        <ListItem>

            {isEditing ?
                <>
                    <EditTodoForm id={id} oldTask={task} toggleIsEditing={toggleIsEditing} />
                </>
                :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: "TOGGLE", id })} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}> {task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => dispatch({ type: "REMOVE", id })}>
                            <Delete />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                            <Edit />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }

        </ListItem>
    )
}

export default memo(Todo);
