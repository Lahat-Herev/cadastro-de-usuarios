import User from "./User";

export default class Developer extends User {
  #skills = [];
  constructor(name, age, weight, height, skills) {
    super(name, age, weight, height);
    this.#skills = skills;
  }

  getSkill() {
    let skills = Object.entries(this.#skills);
    let skillItems = [];
    for (const skill of skills) {
      const [typeOf, items] = skill.map((element) => {
        return element;
      });
      typeOf && skillItems.push(`${typeOf}: ${items}`);
    }
    return skillItems;
  }

  setSkill(value) {
    this.#skills.push(value);
  }
}
