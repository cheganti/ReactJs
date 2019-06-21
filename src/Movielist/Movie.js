import React, { Component } from 'react';

export default class Movie extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div className="card">
            <img src={movie.poster_path} alt={movie.title} />
            <p className="txtcolor">{movie.title}</p>
            <p className="bold">Release Date: <span className="normal">{movie.release_date}</span></p>
            <p className="bold">Rating: <span className="normal">{movie.vote_count}</span></p>
            <p className="bold">Genre: <span className="normal">{movie.genres.join(", ")}</span></p>
        </div>
        );
    }
}