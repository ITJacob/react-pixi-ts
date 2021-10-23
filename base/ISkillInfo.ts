import { IInfo, IValuableItem } from './IBase';

// 记录技能的常规信息
export interface ISkillInfo extends IInfo, IValuableItem {
  groupId: string; // 技能所属的阵营
}
