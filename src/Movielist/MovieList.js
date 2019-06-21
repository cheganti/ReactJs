import React, { Component } from 'react';
import Movie from './Movie';

export class MovieList extends Component {

    componentDidMount() {
        this.props.sortByTitles();
    }
    render() {
        const { data } = this.props;
        const movieData = data.map((value, index) => <Movie key={value.id} movie={value} />)
        return (
            <div className="container1">
                {movieData}
            </div>
        )
    }
}