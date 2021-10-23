import { IInfo } from './IBase';

// 记录英雄的常规信息
export interface IHeroInfo extends IInfo {
  talentId: string; // 英雄的天赋技能
  groupIds: string[]; // 英雄归属的阵营
}
