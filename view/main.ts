import * as PIXI from 'pixi.js';
import { UiManager } from './UiManager';

export default function main(dom: HTMLElement) {
  // Create the application helper and add its render target to the page
  let app = new PIXI.Application({ width: 375, height: 812 });
  dom.appendChild(app.view);
  const um = new UiManager(app);
  um.init();
}
