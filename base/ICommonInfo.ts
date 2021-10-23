// 游戏逻辑层面的静态常规属性，可以是写死本地，也可以是网络请求加载
export interface ICommonInfo {
  version: string;
  HERO: {
    health: number; // 生命槽值
    energy: number; // 能量槽值
    valueLimit: number; // 战术点限制
    skillAccount: number; // 可装备的技能数
  };
}
