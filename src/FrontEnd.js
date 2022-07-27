import Developer from "./Developer";

export default class FrontEnd extends Developer {
    #frontFrameworks = [];
    constructor(name, age, weight, height, skills, frontFrameworks) 
    {
        super(name, age, weight, height, skills);
        this.#frontFrameworks = frontFrameworks;
    }

    getFrontFrameworks()
    {
        this.#frontFrameworks.forEach((element) => {
            return element;
          });
    }

    setFrontFrameworks(value)
    {
        this.#frontFrameworks = value;
    }
}