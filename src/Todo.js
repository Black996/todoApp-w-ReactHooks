import React, { useContext } from 'react';
import useToggleState from "./hooks/useToggleState";
import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import EditTodoForm from './EditTodoForm';
import { TodosContext } from './context/todos.context';

function Todo({ task, completed, id }) {
    const { removeTodo, toggleTodo } = useContext(TodosContext);
    const [isEditing, toggleIsEditing] = useToggleState(false);

    return (
        <ListItem>

            {isEditing ?
                <>
                    <EditTodoForm id={id} oldTask={task} toggleIsEditing={toggleIsEditing} />
                </>
                :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}> {task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
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

export default Todo;
