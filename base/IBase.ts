// info 列表类型的基类
export interface IInfoList<T> {
  [_id: string]: T;
}

// info 类型的基类
export interface IInfo {
  _id: string;
  name: string;
  icon?: string;
  description: string;
}

export interface IValuableItemInfo extends IInfo {
  value: number; // 物品的价值，可供英雄装备，消耗战术点
}