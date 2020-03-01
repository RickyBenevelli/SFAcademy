import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, LOGIN, DATA} from './types';
import axios from 'axios';
import store from '../store'

import {APIKey} from '../APIKey'

export const searchMovie = text => dispatch =>{
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response => dispatch(
        {type: FETCH_MOVIES,
        payload: response.data}
    ))
    .catch(err => console.log(err))
}

export const fetchMovie = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response => dispatch(
        {type: FETCH_MOVIE,
        payload: response.data}
    ))
    .catch(err => console.log(err))
}
export const setLoading = () => {
    return {
      type: LOADING
    };
};

export const login  = ()=> {
    store.dispatch({
        type: LOGIN
    })
}
export const information = async(email)  => {
    store.dispatch({
        type: DATA,
        payload: email
    })
}