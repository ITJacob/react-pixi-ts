import * as PIXI from 'pixi.js';
import { Button } from './Button';

export class UiManager {
  app: PIXI.Application;
  skills: Button[] = [];
  heros: Button[] = [];
  enemies: Button[] = [];
  constructor(app: PIXI.Application) {
    this.app = app;
    Button.init(this.app.renderer);
  }

  init() {
    ['恶魔1', '恶魔2', '恶魔3'].forEach((text, i) => {
      const btn = new Button(this.app.stage);
      btn.x = 80 + i * 100;
      btn.y = 120;
      btn.text = text;
      this.enemies[i] = btn;
    });

    ['恶魔4', '恶魔5'].forEach((text, i) => {
      const btn = new Button(this.app.stage);
      btn.x = 120 + i * 100;
      btn.y = 180;
      btn.text = text;
      this.enemies[i + 3] = btn;
    });

    ['医官', '卫队长'].forEach((text, i) => {
      const btn = new Button(this.app.stage);
      btn.x = 120 + i * 100;
      btn.y = 420;
      btn.text = text;
      this.heros[i] = btn;
    });

    ['炎魔', '刺客', '法师'].forEach((text, i) => {
      const btn = new Button(this.app.stage);
      btn.x = 80 + i * 100;
      btn.y = 480;
      btn.text = text;
      this.heros[i] = btn;
    });

    ['火弹', '火球', '焰爆', '陨石'].forEach((text, i) => {
      const btn = new Button(this.app.stage);
      btn.x = 60 + i * 80;
      btn.y = 720;
      btn.text = text;
      this.skills[i] = btn;
    });
  }
}
