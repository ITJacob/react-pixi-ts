import * as PIXI from 'pixi.js';

export class Button extends PIXI.Sprite {
  static texture: PIXI.RenderTexture;
  static init(render: PIXI.Renderer) {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xff3300);
    graphics.drawRect(0, 0, 100, 100);
    graphics.endFill();

    Button.texture = render.generateTexture(
      graphics,
      PIXI.SCALE_MODES.NEAREST,
      1
    );
  }

  constructor(stage: PIXI.Container) {
    super(Button.texture);
    this._init(stage);
  }

  private _init(stage: PIXI.Container) {
    this.anchor.set(0.5);
    this.width = 100;
    this.height = 100;
    this.x = 100;
    this.y = 100;
    // console.log('haha');

    stage.addChild(this);

    // Opt-in to interactivity
    this.interactive = true;

    // Shows hand cursor
    this.buttonMode = true;

    // Pointers normalize touch and mouse
    this.on('pointerdown', onButtonDown)
      .on('pointerup', onButtonUp)
      .on('pointerupoutside', onButtonUp);

    function onButtonDown(e) {
      e.stopPropagation();
      this.scale.x *= 1.125;
      this.scale.y *= 1.125;
    }
    function onButtonUp(e) {
      e.stopPropagation();
      this.scale.x = 1;
      this.scale.y = 1;
    }
  }
}
