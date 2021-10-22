import { IInfoList, IValuableItemInfo } from './IBase';

// 所有技能的一个列表，记录技能的常规信息
export interface ISkillInfoList extends IInfoList<ISkillInfo> {}

export interface ISkillInfo extends IValuableItemInfo {
  groupId: string; // 技能所属的阵营
}
