import React from "react";

class AddContact extends React.Component {

    state = {
        name: "",
        email: ""
    };

    add = (event) => {
        event.preventDefault();

        if (this.state.name === "" && this.state.email === "") {
            alert("you need to fill all thefields.");
            return;
        }
        console.log(this.state);
    }
    
    render() {
        return (
            <div className="ui main">
                <h2>Add contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text"
                            name="name" 
                            placeholder="name"
                            value={this.state.name}
                            onChange={(event)=> this.setState({ name: event.target.value})}
                        >
                        </input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={(event)=> this.setState({ email: event.target.value})}
                        >
                        </input>
                    </div>
                    <button className="ui button red">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;