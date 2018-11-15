import React, { Component } from 'react';
import AllPostContainer from './containers/AllPostContainer';
import PostFormContainer from './containers/PostFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          React with Redux Example 
        </h1>
        <PostFormContainer />
        <AllPostContainer />
      </div>
    );
  }
}

export default App;