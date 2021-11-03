import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="container my-3">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>SORRY, PAGE NOT FOUND!</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis odio, nesciunt sed eveniet, nemo amet, dignissimos magnam itaque ipsam possimus. Inventore vitae, perferendis harum quas cupiditate adipisci repellendus tempore asperiores at consequatur quos?</p>
                <Link to="/">Back to homepage</Link>
                <br />
            </div>
        </>
    )
}

export default Error;
