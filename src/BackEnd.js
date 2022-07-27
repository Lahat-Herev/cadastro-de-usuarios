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
}
