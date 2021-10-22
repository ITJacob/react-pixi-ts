import { IInfo, IInfoList } from './IBase';

// 所有英雄的一个列表，记录英雄的常规信息
export interface IHeroInfoList extends IInfoList<IHeroInfo> {}

export interface IHeroInfo extends IInfo {
  talentId: string;
  skillGroups: string[];
}
