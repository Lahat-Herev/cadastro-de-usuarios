import Developer from "./Developer";

export default class FrontEnd extends Developer {
  #frontFrameworks = [];
  #tests = [];
  constructor(name, age, weight, height, skills, frontFrameworks, tests) {
    super(name, age, weight, height, skills);
    this.#frontFrameworks = frontFrameworks;
    this.#tests = tests;
  }

  getFrontFrameworks() {
    for (const key in this.#frontFrameworks) {
      if (this.#frontFrameworks.hasOwnProperty(key)) {
        const element = this.#frontFrameworks[key];
        return element;
      }
    }
  }

  setFrontFrameworks(value) {
    this.#frontFrameworks.push(value);
  }

  getSkills() {
    let skills = Object.entries(super.getSkill());
    let skillItems = [];
    for (const skill of skills) {
      const [typeOf, items] = skill.map((element) => {
        return element;
      });
      typeOf && skillItems.push(`${typeOf}: ${items}`);
    }
    return skillItems;
  }

  getTests() {
    for (const key in this.#tests) {
      if (this.#tests.hasOwnProperty(key)) {
        const element = this.#tests[key];
        return element;
      }
    }
  }

  setTests(value) {
    this.#tests.push(value);
  }

  info() {
    return `
        Meu nome é ${this.name}; tenho ${
      this.age
    } anos, meço ${this.getHeight()} metros e peso ${this.getWeight()}kg.
        Tenho conhecimentos nos seguintes frameworks: ${this.getFrontFrameworks()} 
        e em softwares de testes, como: ${this.getTests()};
        além disso, tenho conhecimentos em: ${this.getSkills()}.
        `;
  }
}
