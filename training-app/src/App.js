import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from "./components/head/head-section";
import AddContact from "./components/add/add-contact";
import ContactedList from "./components/list/contact-list";

//in this case we give a props
//name and pass pass the required props

function App() {

  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = (contact) => {

    console.log(contact);
    setContacts([...contacts, contact]);
    //ths allows us to add details on the form
    //to the contact list on the page.
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) {
      setContacts(retriveContacts);
      console.log(setContacts(retriveContacts));
    }
  }, []);

  //useEffect will help us to render the component again
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactedList contacts={contacts} />
    </div>
  );
}

export default App;
