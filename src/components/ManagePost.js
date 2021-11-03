import React from 'react';
import CreatePost from './Posts/CreatePost';
import UpdatePost from './Posts/UpdatePost';
import PostList from './Posts/PostList';
import { useState, useEffect } from "react";
import axios from 'axios';

const ManagePost = () => {

    // need state to keep track of the value in the input
    const initialValues = {
        title: "",
        body: "",
    };

    const [state, setState] = useState(initialValues);

    // need state to keep track of posts
    const [posts, setPosts] = useState([]);

    // boolean state to know if we are editing (this will let us display
    // different inputs based on a condition (conditional rendering)
    const [isEditing, setIsEditing] = useState(false);
    // object state to set so we know which todo item we are editing
    const [currentPost, setCurrentPost] = useState({});

    // useEffect to run once the component mounts
    useEffect(() => {
        axios({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts",
        }).then((response)=>{
            //handle success
            console.log(response);
            setPosts(response.data);
        }).catch((response)=>{
            //handle error
            console.log(response);
        });
    }, []);

    // function to get the value of the input and set the new state
    function handleInputChange(e) {
        // set the new state value to what's currently in the input box
        setState({ ...state, [e.target.name]: e.target.value });
    }

    // function to create a new object on form submit
    function handleFormSubmit(e) {
        // prevent the browser default behavior or refreshing the page on submit
        e.preventDefault();

        // don't submit if the input is an empty string
        if (!state.title || !state.body) {
            alert("All fields are required!");
        } else {
            // set the new post state (the array)
            axios({
                method:"POST",
                url:"https://jsonplaceholder.typicode.com/posts",
                data:state,
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json'
                // },
            }).then((response)=>{
                //handle success
                console.log(response);
                if (response.status === 201) {
                    alert("Post created.");

                    setPosts([
                        ...posts,
                        {
                            userId: 1,
                            id:response.data.id,
                            title: state.title.trim(),
                            body: state.body.trim(),
                        }
                    ]);
                    
                    // clear out the input box
                    setState(initialValues);
                } else {
                    alert("Post not created.");
                }
            }).catch((response)=>{
                //handle error
                console.log(response);
            });
        }
    }

    // function to handle when the "Edit" button is clicked
    function handleEditClick(post) {
        
        // set editing to true
        setIsEditing(true);
        
        // set the currentPost to the post item that was clicked
        setCurrentPost({ ...post });
    }

    // function to get the value of the edit input and set the new state
    function handleEditInputChange(e) {
        // set the new state value to what's currently in the edit input box
        setCurrentPost({ ...currentPost, [e.target.name]: e.target.value });
        //console.log(setCurrentPost);
    }

    // function to edit a object on form submit
    function handleEditFormSubmit(e) {
        e.preventDefault();

        if (!currentPost.title || !currentPost.body) {
            alert("All fields are required!");
        } else {
            handleUpdatePost(currentPost.id, currentPost);
        }
    }

    // function to edit a todo item
    function handleUpdatePost(id, updatedPost) {

        axios({
            method:"PUT",
            url:"https://jsonplaceholder.typicode.com/posts/"+id,
            data:currentPost,
        }).then((response)=>{
            //handle success
            console.log(response);

            if (response.status === 200) {
                alert("Post updated.");

                // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
                // if the id's match, use the second parameter to pass in the updated todo object
                // otherwise just use old todo
                const updatedItem = posts.map((post) => {
                    return post.id === id ? updatedPost : post;
                });

                // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
                setIsEditing(false);
                // update the posts state with the updated post
                setPosts(updatedItem);

            } else {
                alert("Post not updated.");
            }
            
        }).catch((response)=>{
            //handle error
            console.log(response);
        });
    }

    // function to handle when the "Delete" button is clicked
    function handleDeleteClick(id) {
        const removeItem = posts.filter((post) => {
            return post.id !== id;
        });
        axios({
            method:"DELETE",
            url:"https://jsonplaceholder.typicode.com/posts/"+id,
        }).then((response)=>{
            //handle success
            console.log(response);
            if (response.status === 200) {
                
                alert("Post deleted.");
                setPosts(removeItem);

            } else {
                alert("Post not deleted.");
            }
        }).catch((response)=>{
            //handle error
            console.log(response);
        });
    }

    return (
        <>
            <div className="container my-3">
                {
                    isEditing ?
                    (
                        <UpdatePost currentPost={currentPost} handleEditInputChange={handleEditInputChange} handleEditFormSubmit={handleEditFormSubmit} setIsEditing={setIsEditing} />
                    ) :
                    (
                        <CreatePost state={state} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
                    )
                }
            </div>

            <PostList posts={posts} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
        </>
    )
}

export default ManagePost;
