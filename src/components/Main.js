import React, { Component } from 'react';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            //lastName: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //const target = event.target;
        //const name = target.name;
        
        this.setState({
            value: event.target.value,
            //lastName: event.target.lastName
        });
    }

    handleSubmit(event) {
        document.getElementById('result').textContent = this.state.value;
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        First Name:
                        <input
                            name='firstName' 
                            type="text" 
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    {/* <label>
                        Last Name:
                        <input
                            name='lastName' 
                            type='text'
                            value={this.state.lastName}
                            onChange={this.handleChange} />
                    </label>
                    <br />     */}
                    <button onClick={this.handleSubmit}>Submit Info</button>
                </form>
                <hr />
                <p id="result"></p>    
            </div>     
        );
    }
}

export default Main;
