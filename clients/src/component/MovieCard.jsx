import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class MovieCard extends Component {

    render() { 
        const { movie } = this.props;
        return ( 
        <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          {movie.Poster !== "N/A" ? <img src={movie.Poster} className="w-100 mb-2" alt="Movie Cover" />: <i class="fas fa-film fa-10x nopePoster"></i>}
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link to={'/movie/' + movie.imdbID} className="btn btn-primary">
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div> );
    }
}
 
export default MovieCard;