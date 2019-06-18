import React, { Component } from 'react';
import jsonData from '../data/jsonData';

export class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.jsonData = jsonData;
        this.state = {
            searchValues: this.jsonData.data,
        };
    }
    handleChange = (e) => {
        console.log(e)
        console.log(this.state.searchValues)
        this.setState({
            // searchValues: newList
        });
    }
    render() {
        return (
            <div className="search jumbotron">
                <input
                    type="text"
                    id="search"
                    placeholder="Search..." onChange={this.handleChange}
                />
                <button>Search</button>
                <button>Genres</button>
                <button>Title</button>
            </div>
        )
    }
}
