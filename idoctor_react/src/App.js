import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Simptom from './components/pages/simptoms/simptoms'
import Pharm from './components/pages/pharm/pharm'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Registration from './components/pages/Register/register'
import Login from  './components/pages/login/login'



class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/simptom" component={Simptom}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/pharm/:simptom" component={Pharm}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
      </div>
    );
  }
}

export default App;