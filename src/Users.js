export default class Users {
  #weight;
  #height;
  constructor(name, age, weight, height) {
    this.name = name;
    this.age = age;
    this.#weight = weight;
    this.#height = height;
  }

  getWeight() {
    return this.#weight;
  }

  setWeight(weight) {
    this.#weight = weight;
  }

  getHeight() {
    return this.#height;
  }

  setHeight(height) {
    this.#height = height;
  }

  info() {
    return `Meu nome é ${this.name}; tenho ${
      this.age
    } anos, meço ${this.getHeight()} metros e peso ${this.getWeight()}kg.`;
  }
}
