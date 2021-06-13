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
      <div id="container">
        <form className="form" onSubmit={handleSubmit}>
            <h1>ADD A CONTACT </h1>

            <label>FirstName</label>
            <input type="texte" placeholder="Firstname" 
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            />

            <label>LastName</label>
            <input type="texte" placeholder="Lastname" 
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            />

            <label>Email</label>
            <input type="texte" placeholder="Email" 
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Phone</label>
            <input type="tel" placeholder="Phone" 
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
        </div>
    );
};

export default Form;
