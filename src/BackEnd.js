import Developer from "./Developer";

export default class BackEnd extends Developer {
  #databases;
  #messageQueues;
  constructor(name, age, weight, height, skills, databases, messageQueues) 
  {
    super(name, age, weight, height, skills);
    this.#databases = databases;
    this.#messageQueues = messageQueues;
  }

  getSkills() 
  {
    this.skills.forEach((element) => {
      return element;
    });
  }

  getDatabase() 
  {
    return this.#databases;
  }

  setDatabase(value) 
  {
    this.#databases = value;
  }

  getMessageQueue()
  {
    return this.#messageQueues;
  }

  setMessageQueue(value)
  {
    this.#messageQueues = value;
  }

  info() {
    return `
    Meu nome é ${this.name}; tenho ${
      this.age
    } anos, meço ${this.getHeight()} metros e peso ${this.getWeight()}kg.
    Tenho conhecimentos nos seguintes Banco de Dados: ${this.getDatabase()} 
    e em sistema de messageria, como: ${this.getMessageQueue()};
    além disso, tenho conhecimentos em: ${this.getSkills()}.
    `;
  }
}
