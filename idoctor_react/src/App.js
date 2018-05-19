import React, { Component } from 'react'
import Simptom from './components/pages/simptoms/simptoms'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Simptom />
      </div>
    );
  }
}

export default App;