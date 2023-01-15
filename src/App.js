import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
import DisplayForm from './components/FormSection';
import { DisplayUserInfo, DisplayEmploymentExperience, DisplayEducation, DisplayAdditionalInfo } from './components/DisplaySection';

class App extends Component {  
    constructor(props) {
        super(props)
    }
    
    render() {
        const user = this.props.user;
        return (
            <div>
                <DisplayForm />
                <div id='cvDisplay'>
                    <DisplayUserInfo user />
                    <DisplayEmploymentExperience user />
                    <DisplayEducation user />
                    <DisplayAdditionalInfo user />
                </div>
            </div>
        );
    }
}

export default App;
