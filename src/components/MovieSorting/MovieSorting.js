import React, { Component } from 'react'

export default class MovieSorting extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div className="sortByDiv">
                    <span className="bold">Count: </span><span>{this.props.data.length}</span>
                    <span className="bold">Sort By:</span>
                    <button onClick={this.props.sortByRelease} className="btn btn-success-cus">Release Date</button>
                    <button onClick={this.props.sortByRating} className="btn btn-success-cus">Rating</button>
                </div>
        )
    }
}