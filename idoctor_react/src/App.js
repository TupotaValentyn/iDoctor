import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Simptom from './components/pages/simptoms/simptoms'
import Pharm from './components/pages/pharm/pharm'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Footer from 'react-materialize/lib/Footer'
import Registration from './components/pages/Register/register'
import Login from  './components/pages/login/login'
import Navbar from  'react-materialize/lib/Navbar'
import NavItem from  'react-materialize/lib/NavItem'



class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar brand='logo' right>
              <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
              <NavItem href='components.html'>Components</NavItem>
          </Navbar>
          <Switch>
            <Pharm/>
            <Route exact path="/simptom" component={Simptom}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/pharm/:simptom" component={Pharm}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
          <Footer copyrights="&copy 2015 Copyright Text"
                  moreLinks={
                      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                  }
                  links={
                      <ul>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                          <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                      </ul>
                  }
                  className='example'
          >
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </Footer>;
      </div>
    );
  }
}

export default App;