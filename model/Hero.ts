import { IHeroInfo } from '../base/IHeroInfo';
import { Buff } from './Buff';
import { Skill } from './Skill';

// 战斗过程中的英雄实例
export class Hero {
  info: IHeroInfo;

  skills: Skill[];
  health: number;
  energy: number;
  buffs: Buff[];
}
