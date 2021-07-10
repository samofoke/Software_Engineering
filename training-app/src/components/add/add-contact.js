import React from "react";

class AddContact extends React.Component {

    state = {
        name: "",
        email: ""
    };
    
    render() {
        return (
            <div className="ui main">
                <h2>Add contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text"
                            name="name" 
                            placeholder="name"
                        >
                        </input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="email"></input>
                    </div>
                    <button className="ui button red">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;