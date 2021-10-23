import { IInfo } from './IBase';

// 阵营的常规信息
export interface IGroupInfo extends IInfo {
  skillIds: string[]; // 包含的技能列表
}
