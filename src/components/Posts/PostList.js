import React from 'react';
import { useState, useEffect } from "react";

const PostList = ({posts,handleEditClick,handleDeleteClick}) => {

    // boolean state to know if we are loading (this will let us display
    // different inputs based on a condition (conditional rendering)
    const [isLoading, setIsLoading] = useState(true);

    // useEffect to run once the component mounts
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [isLoading]);

    return (
        <>
            <div className="container mt-5">
                <h2>Post List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th scope="col" style={{ width:"130px" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? (
                                <tr><td colSpan="4">Loading...</td></tr>
                            ) : (
                                posts.length === 0 ? (
                                    <tr>
                                        <td colSpan="4">No records found.</td>
                                    </tr>
                                ) : (
                                    posts.map((post)=>{
                                        return (
                                        <tr key={post.id}>
                                            <th scope="row">{post.id}</th>
                                            <td>{post.title}</td>
                                            <td>{post.body}</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary" style={{ marginRight:"5px" }} onClick={() => handleEditClick(post)}>Edit</button>
                                                <button className="btn btn-sm btn-danger" onClick={() => handleDeleteClick(post.id)}>Delete</button>
                                            </td>
                                        </tr>
                                        )
                                    })
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <br />
        </>
    )
}

export default PostList;
