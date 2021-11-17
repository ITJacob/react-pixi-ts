import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { UiManager } from './view/UiManager';

export default class Canvas extends Component<{}, any> {
  componentDidMount() {
    const dom = document.getElementById('pixi-id');
    let app = new PIXI.Application({ width: 375, height: 812 });
    dom.appendChild(app.view);
    const um = new UiManager(app);
    um.init();
  }

  render() {
    return <div className="score-panel" id="pixi-id"></div>;
  }
}
