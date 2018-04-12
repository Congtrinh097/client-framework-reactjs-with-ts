import * as React from 'react';
import './HomeScreen.css';

class HomeScreen extends React.Component<any , any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Roommate FrontEnd Project</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default HomeScreen;