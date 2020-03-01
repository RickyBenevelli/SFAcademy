import React from 'react';
import { Provider } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom';

import NavBar from './component/NavBar'
import Footer from './component/Footer';
import Landing from './component/Landing';
import Movie from './component/Movie';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Home from './component/Home';
import Scores from './component/Scores';
import './App.css'

import store from './store'
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <NavBar/>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/home' component={Home}/>
          <Route  path='/scores'component={Scores}/>
          <Route exact path='/movie/:id' component={Movie}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/sign-in' component={SignIn}/>
          <Footer/>
        </Router>
      </Provider>
      );
}
}

export default App;
