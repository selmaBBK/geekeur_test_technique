import React, { useState, useEffect } from 'react';
import Firebase from 'firebase';
import { db } from '../Firebase';

const formRef = db.collection('form-contacts');

db.collection('form-contacts')
.get()
.then( snapchot => {
    const contacts: Firebase.firestore.DocumentData[] = []
    snapchot.forEach( doc => {
        const data = doc.data()
        contacts.push(data)
    })
  
})


/*
// get the whole collection
 db.collection('form-contacts')
.get()
.then(querySnapshot => {
  const data = querySnapshot.docs.map(doc => doc.data());
  console.log(data); 
}); */



/*db.collection('form-contacts')
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
});
*/

