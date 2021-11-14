import * as PIXI from 'pixi.js';

export class Button extends PIXI.Sprite {
  static texture: PIXI.RenderTexture;
  static init(render: PIXI.Renderer) {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xff3300);
    graphics.drawRect(0, 0, 60, 35);
    graphics.endFill();

    Button.texture = render.generateTexture(
      graphics,
      PIXI.SCALE_MODES.LINEAR,
      1
    );
  }

  private basicText = new PIXI.Text('', { fill: '#ffffff', fontSize: 18 });

  set text(t: string) {
    this.basicText.text = t;
    this.basicText.anchor.set(0.5);
  }

  get text() {
    return this.basicText.text;
  }

  constructor(stage: PIXI.Container) {
    super(Button.texture);
    this._init(stage);
  }

  private _init(stage: PIXI.Container) {
    this.anchor.set(0.5);
    this.width = 60;
    this.height = 35;

    stage.addChild(this);
    this.addChild(this.basicText);

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
