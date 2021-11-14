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
    this.btn.x = 100;
    this.btn.y = 680;
    this.btn.text = '火球';

    const btn2 = new Button(this.app.stage);
    btn2.x = 180;
    btn2.y = 680;
    btn2.text = '火爆';
  }
}
