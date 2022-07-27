import { User } from "./User";

export default class Developer extends User {
  #skills = [];
  constructor(name, age, weight, height, skills) {
    super(name, age, weight, height);
    this.#skills = skills;
  }

  getSkill() {
    return this.#skills;
  }

  setSkill(value) {
    this.#skills = value;
  }
}
