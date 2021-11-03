import React from 'react';
import CreateTodo from './Todos/CreateTodo';
import UpdateTodo from './Todos/UpdateTodo';
import TodosList from './Todos/TodosList';

import { useState, useEffect } from "react";

const ManageTodo = () => {

    // need state to keep track of todos
    // because localstorage is synchronous - that could slow down the application
    // instead of using an just an empty array as the initial state - we can use a function in its place,
    // which will only be executed on the initial render
    // reference: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [todos, setTodos] = useState(() => {
        // get the todos from localstorage
        const savedTodos = localStorage.getItem("todos");
        // if there are todos stored
        if (savedTodos) {
        // return the parsed the JSON object back to a javascript object
        return JSON.parse(savedTodos);
        // otherwise
        } else {
        // return an empty array
        return [];
        }
    });

    // need state to keep track of the value in the input
    const initialValues = {
        title: "",
        description: "",
    };

    const [state, setState] = useState(initialValues);

    // boolean state to know if we are editing (this will let us display
    // different inputs based on a condition (conditional rendering)
    const [isEditing, setIsEditing] = useState(false);
    // object state to set so we know which todo item we are editing
    const [currentTodo, setCurrentTodo] = useState({});

    // useEffect to run once the component mounts
    useEffect(() => {
        // localstorage only support storing strings as keys and values
        // - therefore we cannot store arrays and objects without converting the object
        // into a string first. JSON.stringify will convert the object into a JSON string
        // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
        localStorage.setItem("todos", JSON.stringify(todos));
        // add the todos as a dependancy because we want to update the
        // localstorage anytime the todos state changes
    }, [todos]);

    // function to get the value of the input and set the new state
    function handleInputChange(e) {
        // set the new state value to what's currently in the input box
        //setState(e.target.value);
        setState({
        ...state,
        [e.target.name]: e.target.value
        });
    }

    // function to create a new object on form submit
    function handleFormSubmit(e) {
        // prevent the browser default behavior or refreshing the page on submit
        e.preventDefault();

        // don't submit if the input is an empty string
        if (!state.title) {
        alert("The title field is required!");
        } else {
        // set the new todos state (the array)
        setTodos([
            // copy the current values in state
            ...todos,
            {
            // setting a basic id to identify the object
            id: todos.length + 1,
            // set a text property to the value of the todo state and 
            // trim the whitespace from the input
            title: state.title.trim(),
            description: state.description.trim(),
            }
        ]);
        }

        // clear out the input box
        setState(initialValues);
    }

    // function to get the value of the edit input and set the new state
    function handleEditInputChange(e) {
        // set the new state value to what's currently in the edit input box
        setCurrentTodo({ ...currentTodo, [e.target.name]: e.target.value });
        //console.log(currentTodo);
    }

    // function to edit a object on form submit
    function handleEditFormSubmit(e) {
        e.preventDefault();

        if (!currentTodo.title) {
        alert("The title field is required!");
        } else {
        handleUpdateTodo(currentTodo.id, currentTodo);
        }
    }

    // function to edit a todo item
    function handleUpdateTodo(id, updatedTodo) {
        // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
        // if the id's match, use the second parameter to pass in the updated todo object
        // otherwise just use old todo
        const updatedItem = todos.map((todo) => {
        return todo.id === id ? updatedTodo : todo;
        });
        // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
        setIsEditing(false);
        // update the todos state with the updated todo
        setTodos(updatedItem);
    }

    // function to handle when the "Edit" button is clicked
    function handleEditClick(todo) {
        // set editing to true
        setIsEditing(true);
        // set the currentTodo to the todo item that was clicked
        setCurrentTodo({ ...todo });
    }

    function handleDeleteClick(id) {
        const removeItem = todos.filter((todo) => {
        return todo.id !== id;
        });
        setTodos(removeItem);
    }
    
    return (
        <>
            <div className="container my-3">
                {
                  isEditing ? 
                  (
                    <UpdateTodo currentTodo={currentTodo} handleEditInputChange={handleEditInputChange} handleEditFormSubmit={handleEditFormSubmit} setIsEditing={setIsEditing} />
                  ) : 
                  (
                    <CreateTodo state={state} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
                  )
                }
            </div>

            <TodosList todos={todos} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
        </>
    )
}

export default ManageTodo;
