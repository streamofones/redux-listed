import React, { Component } from 'react';
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

export default App;
