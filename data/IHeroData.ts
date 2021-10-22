// 用户的英雄数据结构，也是后端的表结构
export interface IHeroDataList {
  [_id: string]: IHeroData;
}

export interface IHeroData {
  _id: string;
  heroId: string;
  skillIds: string[]; // 用户自己给英雄设置的技能
  equipmentId: string; // 携带的装备
  goodsId: string; // 携带的物品
}
