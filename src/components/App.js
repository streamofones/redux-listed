import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLists, addList } from '../actions/index';
import List from './List';
import '../index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newList: ''
    };
    this.renderLists = this.renderLists.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchLists()
      .then(res => console.log(res));
  }
  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault(); // Stop the page from submitting automatically.

    let newList = this.state.newList.trim();

    if (newList !== '') {
      this.props.addList(newList);
    }

    this.setState({
      newList: "" // Reset the newItem after submission.
    });
  }
  renderLists(){
    const lists = this.props.lists;
    const listKeys = Object.keys(this.props.lists);

    return listKeys.map((listKey) => {
      return <List key={listKey} listInfo={lists[listKey]}/>
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Listed</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={this.state.newList}
              type="text"
              placeholder="add a list"
            />
          </form>
        </header>
        <main>{this.renderLists()}</main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLists }, dispatch);
}

// Connect the actions to the app.
export default connect(mapStateToProps, mapDispatchToProps)(App);
