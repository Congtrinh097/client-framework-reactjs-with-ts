import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

class AppPool extends React.Component<any , any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<AppPool />, document.getElementById('root'));