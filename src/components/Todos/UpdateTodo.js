import React from 'react';

const UpdateTodo = ({currentTodo,handleEditInputChange,handleEditFormSubmit,setIsEditing}) => {
    return (
        <>
            <h2>Edit Todo</h2>
            <form onSubmit={handleEditFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                    className="form-control"
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    value={currentTodo.title}
                    onChange={handleEditInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                    className="form-control"
                    name="description"
                    type="text"
                    placeholder="Enter description"
                    value={currentTodo.description}
                    onChange={handleEditInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginRight:"10px" }}>Save Changes</button>
                <button className="btn btn-warning" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
        </>
    )
}

export default UpdateTodo;
