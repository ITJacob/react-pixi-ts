import { GameManager } from './GameManager';
import { UiManager } from './UiManager';

export class Battlefield {
  gm: GameManager;
  um: UiManager;
  team: any;

  constructor() {
    this.gm = new GameManager();
    this.um = new UiManager();
  }

  init() {
    // 加载队伍信息
    // 初始化ui
    // 初始化
  }

  start() {
    // 开始游戏，启动第一轮
  }
}
