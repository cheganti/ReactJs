import React, { Component } from 'react';
import jsonData from '../data/jsonData'

export class MovieList extends Component {
    constructor(props) {
        super();
    }
    componentDidMount(){
        this.props.sortByTitles();
    }
    render() {
        const propsData = this.props.data;
        const movieData = propsData.map((value, index) => {
            return (
                <div className="card">
                    <img src={value.poster_path} alt={value.title} />
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