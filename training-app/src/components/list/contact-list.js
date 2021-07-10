import React from "react";
import ContactCard from "../card/contact-card";

const ContactList = (props) => {

    console.log(props);

    const myList =  props.contacts.map((contact) => {

        return(
           <ContactCard contact={contact}>

           </ContactCard>
        );
    })

    return(
        <div className="ui celled list">
            {myList}
        </div>
    );
}

export default ContactList;