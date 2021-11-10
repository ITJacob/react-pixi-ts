import { Hero } from '../model/Hero';

export class Team {
  teamArray = [];
  constructor() {}

  init(heros: Hero[]) {
    this.teamArray.concat(heros);
  }
}
