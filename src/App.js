import React, { Component } from 'react';
import { MovieList } from './components/movies/MovieList';
import { MovieSearch } from './components/movies/MovieSearch'

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Welcome Visitor'
    }
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing..."
    })
  }
  render() {
    return (
      <div>
        <MovieSearch />
        <MovieList />
      </div>
    )
  }
}
export default App;