import React from "react";
import './App.css';
import Header from "./components/head/head-section";
import AddContact from "./components/add/add-contact";
import ContactedList from "./components/list/contact-list";

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactedList />
    </div>
  );
}

export default App;
