import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from "./components/head/head-section";
import AddContact from "./components/add/add-contact";
import ContactedList from "./components/list/contact-list";

//in this case we give a props
//name and pass pass the required props

function App() {

  const [contacts, setContacts] = useState([]);


  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactedList contacts={contacts} />
    </div>
  );
}

export default App;
