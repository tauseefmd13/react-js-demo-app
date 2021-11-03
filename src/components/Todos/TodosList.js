import React from 'react';

const TodosList = ({todos,handleEditClick,handleDeleteClick}) => {

    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto",
    }

    return (
        <>
            <div className="container" style={myStyle}>
                <h2 className="my-3">Todos List</h2>
                {
                  todos.length === 0 ? "No records found." :  
                  todos.map((todo) => {
                      return (
                          <div key={todo.id}>
                              <h4>{todo.title}</h4>
                              <p>{todo.description}</p>

                              <button className="btn btn-sm btn-primary" style={{ marginRight:"10px" }} onClick={() => handleEditClick(todo)}>Edit</button>
                              
                              <button className="btn btn-sm btn-danger" onClick={() => handleDeleteClick(todo.id)}>Delete</button>

                              <hr/> 
                          </div>
                      )
                  })
                } 
            </div> 
        </>
    )
}

export default TodosList;
