import * as PIXI from 'pixi.js';
import { Button } from './Button';

export class UiManager {
  app: PIXI.Application;
  skills: Button[] = [];
  heros: Button[] = [];
  constructor(app: PIXI.Application) {
    this.app = app;
    Button.init(this.app.renderer);
  }

  init() {
    ['火弹', '火球', '焰爆', '陨石'].forEach((text, i) => {
      const btn = new Button(this.app.stage);
      btn.x = 300;
      btn.y = 560 + i * 60;
      btn.text = text;
      this.skills[i] = btn;
    });
    ['炎魔', '卫队长', '医官'].forEach((text, i) => {
      const btn = new Button(this.app.stage);
      btn.x = 40;
      btn.y = 600 + i * 80;
      btn.text = text;
      this.heros[i] = btn;
    });
  }
}
