import React, { Component } from 'react';
import './App.css';
import B from './components/B/index'

class App extends Component {
  render() {
    return (
      <div className="App">
          <B name={"Yang"} />
      </div>
    );
  }
}

export default App;
