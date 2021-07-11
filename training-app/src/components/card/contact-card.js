import React from 'react';
import user from '../imges/user.png';

const ContactCard = (props) => {
    
    const {id, name, email} = props.contact;


    return(
        <div className="item">
            <img className="ui avator images" src={user} alt="user" />
            <div className="content">
                <div className="header">
                    { name }
                </div>
                <div>
                    { email }
                </div>
            </div>
            <i className="trash alternate outline icon"
            style={{color: "red", marginTop: "6px"}}
            onClick={() => props.clickHandler(id)}
            >
            </i>
        </div>
    );
}

export default ContactCard;