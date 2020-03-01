import React, { Component } from 'react';
import {connect} from 'react-redux';

import MovieCard from './MovieCard';
import './component.css'

class MoviesComponent extends Component {
    
    render(){ 
        const {movies} = this.props;
        let content = ''; 
        content = movies.Response === "True" ? movies.Search.map((movie, index) => <MovieCard key={index} movie={movie}/>) : null;
        
        return ( 
            <div className='row contenitore-card'>
                {content}
            </div>
         );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesComponent);