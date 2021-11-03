import React from 'react';

const CreatePost = ({state,handleInputChange,handleFormSubmit}) => {
    return (
        <>
            <h2>Create Post</h2>
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
                    <label htmlFor="body" className="form-label">Body</label>
                    <textarea
                    className="form-control"
                    name="body"
                    placeholder="Enter content"
                    value={state.body}
                    onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </>
    )
}

export default CreatePost;
