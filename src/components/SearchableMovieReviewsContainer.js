import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '&api-key=m63KG8cKtwUQIKKUhdH31CJ97JuYhSrg';
let searchQuery = "";
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';


// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    searchQuery = this.state.searchTerm;
    const link = URL + searchQuery + NYT_API_KEY;
    fetch(link)
    .then(res => res.json())
    .then(reviews => {
      this.setState({
        reviews: [...reviews.results]
      })
    })
    .catch(error => {
      alert(error.message);
      console.log(error.message);
    })

  }

  render() {
    // console.log(this.state.reviews);
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" onChange={this.handleChange} value={this.state.searchTerm}/>
          <input type="submit" value="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
