import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HomeScreen from "./screens/HomeScreen/HomeScreen";

class AppPool extends React.Component<any , any> {
  render() {
    return <HomeScreen/>
  }
}

ReactDOM.render(<AppPool />, document.getElementById('root'));