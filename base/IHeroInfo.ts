import { IInfo, IInfoList } from './IBase';

// 所有英雄的一个列表，记录英雄的常规信息
export interface IHeroInfoList extends IInfoList<IHeroInfo> {}

export interface IHeroInfo extends IInfo {
  talentId: string; // 英雄的天赋技能
  groupIds: string[]; // 英雄归属的阵营
}
