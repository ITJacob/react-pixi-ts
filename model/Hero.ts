import { IHeroInfo } from '../interface/IInfo';
import { Base } from './Base';
import { Buff } from './Buff';
import { Skill } from './Skill';

// 战斗过程中的英雄实例
export class Hero extends Base {
  info: IHeroInfo;
  skills: Skill[];
  health: number;
  energy: number;
  buffs: Buff[];
}
