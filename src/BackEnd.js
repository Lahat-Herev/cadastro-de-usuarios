import Developer from "./Developer";

export default class BackEnd extends Developer {
  #databases = [];
  #messageQueues = [];
  constructor(name, age, weight, height, skills, databases, messageQueues) {
    super(name, age, weight, height, skills);
    this.#databases = databases;
    this.#messageQueues = messageQueues;
  }

  getSkills() {
    return this.getSkill();
  }

  getDatabase() {
    for (const key in this.#databases) {
      if (this.#databases.hasOwnProperty(key)) {
        const element = this.#databases[key];
        return element;
      }
    }
  }

  setDatabase(value) {
    this.#databases = value;
  }

  getMessageQueue() {
    for (const key in this.#messageQueues) {
      if (this.#messageQueues.hasOwnProperty(key)) {
        const element = this.#messageQueues[key];
        return element;
      }
    }
  }

  setMessageQueue(value) {
    this.#messageQueues = value;
  }

  info() {
    return `
    Meu nome é ${this.name}; tenho ${
      this.age
    } anos, meço ${this.getHeight()} metros e peso ${this.getWeight()}kg.
    Tenho conhecimentos nos seguintes banco de dados: ${this.getDatabase()} 
    e em sistema de messageria, como: ${this.getMessageQueue()};
    além disso, tenho conhecimentos em: ${this.getSkill()}.
    `;
  }
}
