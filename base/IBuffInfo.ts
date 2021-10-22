import { IInfo, IInfoList } from './IBase';

// 所有状态的一个列表，战斗时会附加在战斗单位上。
export interface IBuffInfoList extends IInfoList<IBuffInfo> {}

export interface IBuffInfo extends IInfo {}
