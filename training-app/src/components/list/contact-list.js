import React from "react";
import ContactCard from "../card/contact-card";

const ContactList = (props) => {

    //console.log(props);
    const removeContactId = (id) => {
        props.getUserId(id);
    };

    const contacts = [
        {
            id: "1",
            name: "Sly",
            email: "sly@gmail.com"
        },
    ];

    const myList =  contacts.map((contact) => {
        return(
        <ContactCard
            contact={contact}
            clickHandler={removeContactId}
            key={contact.id}
        />
        );
    });

    return(
        <div className="main">
            <h2>
                Contact List
                <button className="ui button gray" style={{marginLeft: '77%'}}>Add Contact</button>
            </h2>
            <div className="ui celled list">{myList}</div>
        </div>
    );
}

export default ContactList;