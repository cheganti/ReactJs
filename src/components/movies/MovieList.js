import React, { Component } from 'react';
import jsonData from '../data/jsonData'

export class MovieList extends Component {
    constructor() {
        super();
        this.movieList = jsonData.data;
    }
    render() {
        console.log(jsonData.data[0])
        const movieData = this.movieList.map((value, index) => {
            console.log(value.id)
            return (
                <div className="card">
                    <img src={value.poster_path} />
                    <p className="txtcolor">{value.title}</p>
                    <p className="bold">{value.tagline}</p>
                </div>
              );
        })
        return (
            <div className="container1">
                {movieData}
            </div>
        )
    }
}
