import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLists } from '../actions/index';
import '../index.css';

class App extends Component {
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLists }, dispatch);
}

// Connect the actions to the app.
export default connect(null, mapDispatchToProps)(App);
