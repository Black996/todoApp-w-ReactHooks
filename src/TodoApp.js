import React from "react";
import { Typography, Paper, AppBar, Grid, Toolbar } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from "./context/todos.context";

function TodoApp() {
    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }} elevation={0} >
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>


    )
}

export default TodoApp;

// -TodoApp
//  - TodoForm
//  - TodoList
//     - TodoItem