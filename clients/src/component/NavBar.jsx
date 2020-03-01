import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import store from '../store';
import { createHashHistory } from 'history';
import axios from 'axios'

import './component.css';
import Logo from './Logo';
// import Saluto from './Saluto';

import {searchMovie, fetchMovies, setLoading} from '../actions/searchActions';

class Navbar extends Component {
    state = {  }

    handleSearch = e => {
        this.props.searchMovie(e.target.value);
    }

    handleSubmit = e =>{
        e.preventDefault();
        const history = createHashHistory();
        history.push('/');
        this.props.fetchMovies(this.props.text)
        this.props.setLoading()
    }

    scores = () => {
        var url = "http://localhost:3000/router/scores";
        axios.get(url)
        .then(res => console.log(res.data))
        .catch(err => alert(err));
    }

    Accesso = store.getState()

    render() { 
        return ( 
            <div className="contenitore-navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Logo className=''/>
                    <Link className="navbar-brand" to={'/home'}>Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse barra" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link  className="nav-link barra" to={'/sign-in'}>SIGN IN <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link barra" to={'/sign-up'}>SIGN UP</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link barra" to={'/scores'} onClick={this.scores}>Score table</Link>
                            </li>
                            {/* <Saluto/> implementare in seguito*/}
                        </ul>
                        <form className="form-inline my-2 my-lg-0" >
                            <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" onChange={this.handleSearch}/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSubmit}>Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(Navbar);
