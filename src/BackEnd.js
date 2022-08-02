import Developer from "./Developer";

export default class BackEnd extends Developer {
  #databases = [];
  #messageQueues = [];
  constructor(name, age, weight, height, skills, databases, messageQueues) {
    super(name, age, weight, height, skills);
    this.#databases = databases;
    this.#messageQueues = messageQueues;
  }

  getSkill() {
    let skills = Object.entries(super.getSkill());
    let skillItems = [];
    for (const skill of skills) {
      const [, items] = skill.map((element) => {
        return element;
      });
      skillItems.push(items);
    }
    return skillItems;
  }

  getDatabase() {
    let databases = Object.entries(this.#databases);
    let dbItems = [];
    for (const database of databases) {
      const [, items] = database.map((element) => {
        return element;
      });
      const item = items.map((element) => {
        return element;
      });
      dbItems.push(item);
    }
    return dbItems;
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
    Tenho conhecimentos nos seguintes banco de dados: ${this.getDatabase()} 
    e em sistemas de messageria, como: ${this.getMessageQueue()};
    além disso, tenho conhecimentos em: ${this.getSkill()}.
    `;
  }
}
