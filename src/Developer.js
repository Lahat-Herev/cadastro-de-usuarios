import { Users } from "./Users";

export default class Developers extends Users {
  #skills = [];
  constructor(name, age, skills) {
    super(name, age);
    this.#skills = skills;
  }

  getSkill() {
    return this.#skills;
  }

  setSkill(value) {
    this.#skills = value;
  }
}
