import * as PIXI from 'pixi.js';
import { Button } from './Button';

export class UiManager {
  app: PIXI.Application;
  btn: Button;
  constructor(app: PIXI.Application) {
    this.app = app;
    Button.init(this.app.renderer);
  }

  init() {
    this.btn = new Button(this.app.stage);
  }
}
