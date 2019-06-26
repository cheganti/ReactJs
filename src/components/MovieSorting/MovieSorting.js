import React, { Component } from "react";
import "./MovieSorting.css";

export default class MovieSorting extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sortByDiv">
        <div className="float-left">
          <span className="bold">Count: </span>
          <span>{this.props.data.length}</span>
        </div>
        <div className="float-right">
          <span className="bold">Sort By:</span>
          <button
            onClick={this.props.sortByRelease}
            className={`btn btn-success-cus ${this.props.isRating === true
              ? "active"
              : "deactive"}`}
          >
            Release Date
          </button>
          <button
            onClick={this.props.sortByRating}
            className={`btn btn-success-cus ${this.props.isRelease === true
              ? "active"
              : "deactive"}`}
          >
            Rating
          </button>
        </div>
      </div>
    );
  }
}
