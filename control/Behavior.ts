import { Hero } from "../model/Hero";
import { Skill } from "../model/Skill";

export class Behavior {
  from: Hero;
  to: Hero;
  use: Skill;
  
  active() {
    this.use(from, to)
  }
}