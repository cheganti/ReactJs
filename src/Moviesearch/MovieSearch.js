import React, { Component } from 'react';
import jsonData from '../data/jsonData.json';
import { MovieList } from '../Movielist/MovieList';

export default class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.jsonData = jsonData;

        this.state = {
            searchResults: this.jsonData.data,
            updatedList: this.jsonData.data,
            inputValues: ""
        };
    }
    sortByGengres = () => {
        const sortByGengresTag = this.state.searchResults
        let sortResult = sortByGengresTag.sort((a, b) => {
            if (a.genres > b.genres) {
                return 1
            } else if (a.genres < b.genres) {
                return -1
            }
        })
        this.setState({
            searchResults: sortResult
        })
    }
    sortByTitles = () => {
        const sortByTitleNames = this.state.searchResults
        let sortResult = sortByTitleNames.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            }
        })
        this.setState({
            searchResults: sortResult
        })
    }

    sortByRelease = () => {
        const sortByReleaseDate = this.state.searchResults
        let sortResult = sortByReleaseDate.sort((a, b) => {
            return new Date(b.release_date) - new Date(a.release_date);
        })
        this.setState({
            searchResults: sortResult
        })
    }
    sortByRating = () => {
        const sortByMovieRating = this.state.searchResults
        let sortResult = sortByMovieRating.sort((a, b) => {
            return b.vote_count - a.vote_count
        })
        this.setState({
            searchResults: sortResult
        })
    }

    handleMovieSearch = (e) => {
        let targetValues = "";
        if (e.target.value !== '') {
            targetValues = e.target.value;
        }
        this.setState({
            inputValues: targetValues
        })
    }
    onClickResults = () => {
        const currentLists = this.state.updatedList;
        let filterValue = this.state.inputValues;
        let movieList = "";
        if (filterValue !== '') {
            movieList = currentLists.filter(item => {
                filterValue = filterValue.toLowerCase();
                return item.title.toLowerCase().includes(filterValue);
            })

        } else {
            movieList = this.jsonData.data;
        }
        this.setState({
            searchResults: movieList
        });
    }
    render() {
        const data = this.state.searchResults;
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="title">Find your movie</h1>
                    <div className="input-group mb-3">
                        <input className="form-control"
                            type="text"
                            id="search"
                            placeholder="Search..." onChange={this.handleMovieSearch}
                        />
                        <div className="input-group-append">
                            <button onClick={this.onClickResults} className="btn btn-success-cus">Search</button>
                            <button onClick={this.sortByGengres} className="btn btn-success-cus">Genres</button>
                            <button onClick={this.sortByTitles} className="btn btn-success-cus">Title</button>
                        </div>
                    </div>
                    <div className="sortByDiv"><span className="bold">Sort By:</span>
                        <button onClick={this.sortByRelease} className="btn btn-success-cus">Release Date</button>
                        <button onClick={this.sortByRating} className="btn btn-success-cus">Rating</button>
                    </div>
                </div>
                <MovieList data={data} sortByTitles={this.sortByTitles} />
            </div>
        )
    }
}