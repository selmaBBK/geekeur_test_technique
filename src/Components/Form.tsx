import React from 'react';
import '../App.css';
import {db} from '../Firebase/firebase';

export const Form = () => {
    return (
        <form className="form">
            <h1>Contact form </h1>

            <label>FirstName</label>
            <input placeholder="FirstName" />

            <label>LastName</label>
            <input placeholder="LastName" />

            <label>Email</label>
            <input placeholder="Email" />

            <label>Phone</label>
            <input placeholder="Phone" />

            <label>Message</label>
            <textarea placeholder="Message" />

            <button type="submit">Submit</button>

        </form>
    );
};

export default Form;
