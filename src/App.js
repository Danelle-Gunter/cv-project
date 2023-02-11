import React, {useState} from 'react';
import Project from './CVProject';
import {DisplayHeader, DisplayFooter} from './pageDisplay';


function App() {
    return (
        <main>
            <DisplayHeader />
            <Project />
            <DisplayFooter />
        </main>
    )
};

export default App;