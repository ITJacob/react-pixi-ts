import { IInfoList, IValuableItemInfo } from './IBase';

// 所有阵营的一个列表，阵营的常规信息
export interface IGroupList extends IInfoList<IGroup> {}

export interface IGroup extends IValuableItemInfo {}
