import * as PIXI from 'pixi.js';
import { UiManager } from './UiManager';

export default function main(dom: HTMLElement) {
  // Create the application helper and add its render target to the page
  let app = new PIXI.Application({ width: 640, height: 360 });
  dom.appendChild(app.view);
  console.log('haha');
  const um = new UiManager(app);
  um.init();
}
