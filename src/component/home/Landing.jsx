import React, {Component} from 'react';

import {connect} from 'react-redux'

import Navbar from '../NavBar';
import Footer from '../Footer';
import Spinner from '../Spinner'
import MoviesContainer from './MoviesContainer'

class Landing extends Component {
    state = {  }
    render() { 
        const {loading} = this.props;
        return ( 
            <div>
                <Navbar/>
                {loading ? <Spinner/>: <MoviesContainer/>}
                <Footer/>
            </div>
         );
    }
}

const mapStateToProps = state =>({
    loading: state.movies.loading
})

export default connect(mapStateToProps, {})(Landing);