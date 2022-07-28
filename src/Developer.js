import User from "./User";

export default class Developer extends User {
  #skills = [];
  constructor(name, age, weight, height, skills) {
    super(name, age, weight, height);
    this.#skills = skills;
  }

  getSkill() {
    for (const key in this.#skills) {
      if (this.#skills.hasOwnProperty(key)) {
        const element = this.#skills[key];
        return element;
      }
    }
  }

  setSkill(value) {
    this.#skills = value;
  }
}
