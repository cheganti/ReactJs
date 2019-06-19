import React, { Component } from 'react';
import jsonData from '../data/jsonData';
import { MovieList } from '../Movielist/MovieList';

export class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.jsonData = jsonData;

        this.state = {
            searchResults: this.jsonData.data,
            updatedList: this.jsonData.data,
            inputValues: ""
        };
    }
    sortByGeners = () => {
        const sortByGenersTag = this.state.searchResults
        let sortResult = sortByGenersTag.sort((a, b) => {
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
            <div className="jumbotron">
                <div className="searchByDiv">
                    <input
                        type="text"
                        id="search"
                        placeholder="Search..." onChange={this.handleMovieSearch}
                    />
                    <button onClick={this.onClickResults}>Search</button>
                    <button onClick={this.sortByGeners}>Genres</button>
                    <button onClick={this.sortByTitles}>Title</button>
                </div>
                <div className="sortByDiv">
                    <button onClick={this.sortByRelease}>sort By Release</button>
                    <button onClick={this.sortByRating}>sort By Rating</button>
                </div>
                <MovieList data={data} sortByTitles={this.sortByTitles} />
            </div>
        )
    }
}