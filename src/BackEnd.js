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
    let databases = Object.entries(this.#databases);
    for (const database of databases) {
      const [, items] = database.map((element) => {
        return element;
      });
      const item = items.map(function (elements) {
        return elements;
      });
      console.log(item);
    }
  }

  setDatabase(value) {
    this.#databases.push(value);
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
    this.#messageQueues.push(value);
  }

  info() {
    return `
    Meu nome é ${this.name}; tenho ${
      this.age
    } anos, meço ${this.getHeight()} metros e peso ${this.getWeight()}kg.
    Tenho conhecimento nas seguintes linguagens: ${this.getSkill()}.
    Tenho conhecimentos nos seguintes banco de dados: ${this.getDatabase()}.
    Tenho conhecimentos nos  sistema de messageria, como: ${this.getMessageQueue()};
    `;
  }
}
