import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
    setContacts([...contacts, {id: uuid(), ...contact}]);
    //ths allows us to add details on the form
    //to the contact list on the page.
  }

  const deleteContactHandler = (id) => {
    const newUser = contacts.filter((contact) => {
      return(contact.id !== id);
    });

    setContacts(newUser);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) {
      setContacts(retriveContacts);
      //console.log(setContacts(retriveContacts));
    }
  }, []);

  //useEffect will help us to render the component again
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ContactedList} />
          <Route path="/add" component={AddContact} />
        </Switch>
        {/* <ContactedList 
        contacts={contacts}
        getUserId={deleteContactHandler} 
      /> */}
      </Router>
    </div>
  );
}

export default App;
