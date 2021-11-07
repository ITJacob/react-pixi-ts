import React, { Component } from 'react';
import pixiMain from './view/main';

export default class Canvas extends Component<{}, any> {
  componentDidMount() {
    const dom = document.getElementById('pixi-id');
    pixiMain(dom);
  }

  render() {
    return <div className="score-panel" id="pixi-id"></div>;
  }
}
