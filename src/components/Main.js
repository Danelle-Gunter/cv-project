import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Hello, {this.props.name}.</p>     
        );
    }
}

export default Main


{/*<p>{this.props.title}</p>
<p>{this.props.email}</p>
<p>{this.props.phoneNumber}</p>     */}