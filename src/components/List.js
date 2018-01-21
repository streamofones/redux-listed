import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItem } from "../actions";

import ListItem from "./ListItem";

// images
import latest from "../images/latest.png";
import popular from "../images/popular.png";

class List extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: "latest",
      newItem: ''
    };
    this.sortItems = this.sortItems.bind(this);
    this.setSortBy = this.setSortBy.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setSortBy(e) {
    this.setState({
      sortBy: e.target.id
    });
  }
  sortItems() {
    const popular = (a, b) => b.score - a.score;
    const latest = (a, b) => b.created_at - a.created_at;

    const sortedList = Array.from(this.props.listInfo.items).sort(
      this.state.sortBy === "popular" ? popular : latest
    );

    const listItems = sortedList.map(item => {
      return (
        <ListItem
          key={item._id}
          listId={this.props.listInfo._id}
          itemInfo={item}
        />
      );
    });

    return listItems;
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault(); // Stop the page from submitting automatically.

    let newItem = this.state.newItem.trim();

    if (newItem !== '') {
      this.props.addItem(this.props.listInfo._id, newItem);
    }



    this.setState({
      newItem: "" // Reset the newItem after submission.
    });
  }
  render() {
    return (
      <div className="list">
        <header>
          <h2>{this.props.listInfo.title}</h2>
          <div className="list__sorting">
            <p>Sort by:</p>

            <button id="popular" onClick={this.setSortBy}>
              <img src={popular} alt="thumbs up icon" />Most Popular
            </button>
            <button id="latest" onClick={this.setSortBy}>
              <img src={latest} alt="" />Latest
            </button>
          </div>
        </header>
        <ul>
          {this.sortItems()}
          <li className="list__item">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="newItem" className="visually-hidden">
                Add To List:
              </label>
              <input
                onChange={this.handleChange}
                value={this.state.newItem}
                type="text"
                id="newItem"
                placeholder="add item to list"
              />
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addItem}, dispatch);
}

export default connect(null, mapDispatchToProps)(List);
