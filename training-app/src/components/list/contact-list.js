import React from "react";

const ContactList = (props) => {

    console.log(props);

    const myList =  props.contacts.map((contact) => {
        
        return(
            <div className="item">
                <div className="content">
                    <div className="header">
                        { contact.name }
                    </div>
                    <div className="header">
                        { contact.email }
                    </div>
                    <i className="trash alternate outline icon"></i>
                </div>

            </div>
        );
    })

    return(
        <div className="ui celled list">
            {myList}
        </div>
    );
}

export default ContactList;