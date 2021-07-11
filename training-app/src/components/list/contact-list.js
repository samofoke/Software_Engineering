import React from "react";
import ContactCard from "../card/contact-card";

const ContactList = (props) => {

    //console.log(props);
    const removeContactId = (id) => {
        props.getUserId(id);
    };
    const myList =  props.contacts.map((contact) => {
        return(
        <ContactCard
            contact={contact}
            clickHandler={removeContactId}
            key={contact.id}
        />
        );
    });

    return(
        <div className="ui celled list">
            {myList}
        </div>
    );
}

export default ContactList;