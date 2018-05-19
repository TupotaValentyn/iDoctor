import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Simptom from './components/pages/simptoms/simptoms'
import Pharm from './components/pages/pharm/pharm'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Registration from './components/pages/Register/register'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/simptom" component={Simptom}/>
            <Route exact path="/pharm" component={Pharm}/>
          </Switch>
          <Registration />
      </div>
    );
  }
}

export default App;