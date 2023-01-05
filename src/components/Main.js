import React, { Component } from 'react';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        document.getElementById('result').textContent = this.state.value;
    }

    render() {
        return (
            <div>
                <label>Name:</label>
                <input type="text" 
                        value={this.state.value}
                        onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit Info</button>
                
                <hr />
                <p id="result"></p>    
            </div>     
        );
    }
}

export default Main;
