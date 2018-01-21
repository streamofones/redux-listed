import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLists } from '../actions/index';
import '../index.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchLists()
      .then(res => console.log(res));
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Listed</h1>
          <form>
            <input
              type="text"
              placeholder="add a list"
            />
          </form>
        </header>
        <main>Lists go here</main>
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
