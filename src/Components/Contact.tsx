import React from 'react';
import Firebase from 'firebase';
import { db } from '../Firebase';


  
    function contacts(doc: any) {
        const contactsList = document.querySelector('#contacts-list'); 
        const li = document.createElement('li')
        const FirstName = document.createElement('p')
        const LastName = document.createElement('p')
        const Email = document.createElement('p')
        const Phone = document.createElement('p')
        const Message = document.createElement('p')

        li.setAttribute('data-id', doc.id);
        FirstName.textContent = doc.data().FirstName; 
        LastName.textContent = doc.data().LastName;
        Email.textContent = doc.data().Email;
        Phone.textContent = doc.data().Phone;
        Message.textContent = doc.data().Message;

        li.appendChild(FirstName); 
        li.appendChild(LastName);
        li.appendChild(Email);
        li.appendChild(Phone);
        li.appendChild(Message);

        contactsList?.appendChild(li);

    }

// get the whole collection

db.collection('form-contacts')
.get()
.then( snapchot => {
        snapchot.docs.forEach ( doc => {
            contacts(doc);

        })
       
    })