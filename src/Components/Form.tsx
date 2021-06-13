import React, { useState, useEffect } from 'react';
import '../App.css';
import { db } from '../Firebase';

export const Form = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoader(true);

        db.collection("form-contacts")
        .add({
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Phone: Phone,
          message: Message,
        })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted 👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    };
  

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact form </h1>

            <label>FirstName</label>
            <input placeholder="FirstName" 
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            />

            <label>LastName</label>
            <input placeholder="LastName" 
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            />

            <label>Email</label>
            <input placeholder="Email" 
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Phone</label>
            <input placeholder="Phone" 
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            />

            <label>Message</label>
            <textarea placeholder="Message"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}></textarea>

            <button type="submit"
            style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >Submit</button>

        </form>
    );
};

export default Form;
