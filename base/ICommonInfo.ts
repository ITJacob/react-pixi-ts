// 一些常规的基础配置，可以是写死本地，也可以是网络请求加载
export interface ICommonInfo {
  version: string;
  hero: {
    health: number; // 生命槽值
    energy: number; // 能量槽值
    valueLimit: number; // 战术点限制
  };
}
