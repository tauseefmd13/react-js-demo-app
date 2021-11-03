import React from 'react';

const UpdatePost = ({currentPost,handleEditInputChange,handleEditFormSubmit,setIsEditing}) => {
    return (
        <>
            <h2>Edit Post</h2>
            <form onSubmit={handleEditFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                    className="form-control"
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    value={currentPost.title}
                    onChange={handleEditInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Body</label>
                    <textarea
                    className="form-control"
                    name="body"
                    placeholder="Enter content"
                    value={currentPost.body}
                    onChange={handleEditInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginRight:"10px" }}>Save Changes</button>
                <button className="btn btn-warning" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
        </>
    )
}

export default UpdatePost;
