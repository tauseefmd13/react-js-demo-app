import React from 'react';
import { useState } from "react";
// import axios from 'axios';

const Contact = () => {

    // need state to keep track of the value in the input
    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
    };
    const [state, setState] = useState(initialValues);

    // function to get the value of the input and set the new state
    function handleInputChange(e) {
        // set the new state value to what's currently in the input box
        setState({ ...state, [e.target.name]: e.target.value });
    }

    // function to create a new object on form submit
    function handleFormSubmit(e) {
        // prevent the browser default behavior or refreshing the page on submit
        e.preventDefault();

        if(!state.first_name || !state.last_name || !state.email || !state.subject || !state.message) {
            alert("All fields are required!");
        } else {
            alert("Message Sent.");
            // clear out the input box
            setState(initialValues);

            // axios({
            //     method:"POST",
            //     url:"http://localhost:8000/api/v1/contactUs",
            //     data:state,
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            // }).then((response)=>{
            //     if (response.status === 200) {
            //         alert("Message Sent.");
            //         // clear out the input box
            //         setState(initialValues);
            //     } else if(response.status === 400) {
            //         alert("Message failed to send.");
            //     }
            // });
        }
    }

    return (
        <>
            <div className="container my-3">
                <h2 className="text-center">Contact Us</h2>
                <p className="text-center">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
                <br />
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" className="form-control mb-3" name="first_name" placeholder="First Name" value={state.first_name} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" className="form-control mb-3" name="last_name" placeholder="Last Name" value={state.last_name} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control mb-3" name="email" placeholder="Email Address" value={state.email} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="form-control mb-3" name="subject" placeholder="Subject" value={state.subject} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control mb-3" name="message" placeholder="Message" value={state.message} onChange={handleInputChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Send</button>
                </form>

                <br />
            </div> 
        </>
    )
}

export default Contact;
