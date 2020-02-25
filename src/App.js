import React from 'react';
import { Provider } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom';

import NavBar from './component/NavBar'
import Footer from './component/Footer';
import Landing from './component/home/Landing';
import Movie from './component/Movie';
import './App.css'

import store from './store'
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <NavBar/>
          <Route exact path='/movie/:id' component={Movie}/>
          <Route exact path='/' component={Landing}/>
          <Footer/>
        </Router>
      </Provider>
      );
}
}

export default App;
