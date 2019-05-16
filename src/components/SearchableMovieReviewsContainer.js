import React, { Component } from 'react';
import 'isomorphic-fetch';
import {MovieReviews} from './MovieReviews'

const NYT_API_KEY = '';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
const APIKEYEND = `&api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  searchMovie = () => {
    fetch(URL+this.state.searchTerm+APIKEYEND)
      .then(response => response.json())
      .then(json => {
        let reviews = json.results
        this.setState({ reviews })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.searchMovie()
  }

  handleChange = (event) => this.setState({searchTerm: event.target.value})


  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="movie" id="movie" type="text" placeholder="Enter Search Term" value={this.state.searchTerm}/>
          <div className="searchable-movie-reviews">
            {this.state.reviews === [] ? "" : <MovieReviews reviews={this.state.reviews} /> }
          </div>
        </form>
      </div>
    )
  }
}
