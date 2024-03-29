import React, { Component } from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'
import Simptom from './components/pages/simptoms/simptoms'
import Pharm from './components/pages/pharm/pharm'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Footer from 'react-materialize/lib/Footer'
import Registration from './components/pages/Register/register'
import Login from  './components/pages/login/login'
import Doctor from  './components/pages/doctor/doctor'
import Navbar from  'react-materialize/lib/Navbar'
import notFound from './components/pages/notFound/notFound'
import AboutUs from './components/pages/aboutus/aboutus'




class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="content">
              <Navbar brand='iDoctor' right>
                      <NavLink to="/login">Вхід</NavLink>
                      <NavLink to="/registration">Реєстрація</NavLink>
                        <NavLink to="/aboutus">Про нас</NavLink>
              </Navbar>
              <main className="main">
                  <Switch>
                      <Route exact path="/" component={Simptom}/>
                      <Route exact path="/registration" component={Registration}/>
                      <Route exact path="/pharm/:simptom" component={Pharm}/>
                      <Route exact path="/doctor" component={Doctor}/>
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/aboutus" component={AboutUs} />
                      <Route component={notFound} />
                  </Switch>
              </main>
          </div>
          <Footer copyrights="@copy 2018 Copyright Text"
                  className='example'>
              <h5 className="white-text">iDoctor Web App</h5>
              <p className="grey-text text-lighten-4"> За своє здоров'я ви несете відповідальність! Не гайте час: запишіться на прийом до лікаря у вашій лікарні.</p>
          </Footer>
      </div>
    );
  }
}

export default App;