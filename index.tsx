import React, { Component } from 'react';
import { render } from 'react-dom';
import Canvas from './Canvas';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return <Canvas />;
  }
}

render(<App />, document.getElementById('root'));
