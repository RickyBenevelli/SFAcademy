import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store';
import axios from 'axios';

import './component.css'

import { fetchMovie, setLoading } from '../actions/searchActions';

import Spinner from './Spinner';

export class Movie extends Component {
  state = {
    title: '',
    id: this.props.match.params.id,
    vote: '',
  };
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
    // console.log(this.state);
  }
  
  render() {
    // if(this.props.movie.Title !== undefined){
    //   var info = this.props.movie
    //   this.setState({
    //     title: info.Title,
    //     id: info.id
    //   })
    //   console.log(this.state)
    // }
    const handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
      console.log(this.state)
    }
    const handleSubmit = (e) => {
      var voto = parseInt(this.state.vote.replace(/[^\d-]+/g, ''));
      if(voto > 10 | voto < 0){
        return(
          alert('il voto deve essere compreso tra 0 e 10')
        )
      }
      e.preventDefault();
      const baseUrl = "http://localhost:3000"; //DA TOGLIERE E CONFIGURARE IL PROXY
      var url = baseUrl + '/router/votation';
      var stato = store.getState();

      if(stato.movies.isLogged){ //se è loggato
        axios.post(url, {
          params:{
            id_film: stato.movies.movie.imdbID,
            title_film: stato.movies.movie.Title,
            email: 'si@',
            vote: this.state.vote,
          }
        })
        .then(res => {
          if(res.data.status !== undefined){
            //VOTO ANDATO A BUON FINE
            console.log(JSON.stringify(res.data.status));
          }
          else if (res.data.error !== undefined){
            alert(res.data.error)
          }
          else{
            alert('qualcosa storto')
          }
        })
        .catch(err => alert('errore: ' + err))
      }
      else{
        alert('Devi prima accedere al tuo account')
      }
    };

    const { loading, movie } = this.props;
    let movieInfo = (
      <div className="container">
        <div className="row">
           <div className="col-md-4 card card-body"> {movie.Poster !== "N/A" ? <img src={movie.Poster} className="thumbnail" alt="Poster" />: <i className="fas fa-film fa-10x nopePoster"></i>}
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {movie.Plot}
              <hr />
              <a
                href={'https://www.imdb.com/title/' + movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
              <input className='votation' type="vote" name="vote" value={this.state.vote} onChange={handleChange}/>
              <button type="button" className="btn btn-outline-success" onClick={handleSubmit}>VOTE</button>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading}
)(Movie);
