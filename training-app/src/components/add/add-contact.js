import React from "react";

class AddContact extends React.Component {
    
    render() {
        return (
            <div className="ui main">
                <h2>Add contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name"></input>
                    </div>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name"></input>
                    </div>
                    <button className="ui button red">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;