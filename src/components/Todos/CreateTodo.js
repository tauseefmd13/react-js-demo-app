import React from 'react';

const CreateTodo = ({state,handleInputChange,handleFormSubmit}) => {
    return (
        <>
            <h2>Create Todo</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                    className="form-control"
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    value={state.title}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                    className="form-control"
                    name="description"
                    type="text"
                    placeholder="Enter description"
                    value={state.description}
                    onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </>
    )
}

export default CreateTodo;
