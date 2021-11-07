import { IInfo } from '../interface/IInfo';

export class Base {
  info: IInfo;
  constructor(i: IInfo) {
    this.info = i;
  }
}
