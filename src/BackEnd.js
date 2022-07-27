import Developers from "./Developer";

export default class BackEnd extends Developers {
  #databases;
  constructor(name, age, skills, databases) {
    super(name, age, skills);
    this.#databases = databases;
  }

  getSkill() {
    this.skills.forEach((element) => {
      return element;
    });
  }

  getDatabase() {
    return this.#databases;
  }

  setDatabase(value) {
    this.#databases = value;
  }
}
