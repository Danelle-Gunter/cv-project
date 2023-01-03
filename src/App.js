import React, { Component } from 'react';
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Main name="Joe Smoe" />
    )
  }
}

export default App;
