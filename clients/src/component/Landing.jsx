import React, {Component} from 'react';
import {connect} from 'react-redux'

import Spinner from './Spinner'
import MoviesContainer from './MoviesContainer'

class Landing extends Component {
    render() { 
        const {loading} = this.props;
        return ( 
            <div>
                {loading ? <Spinner/>: <MoviesContainer/>}
            </div>
         );
    }
}

const mapStateToProps = state =>({
    loading: state.movies.loading
})

export default connect(mapStateToProps, {})(Landing);