import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import "./styles.css";
import User from "./User";

const user = new User("Joao", 20, 75.5, 1.67);

const frontEndDeveloper = new FrontEnd(
  "Jose",
  21,
  85.5,
  1.57,
  { ProjectPrototype: "Figma", IDE: "VS Code", Api: "Postman" },
  { JS: ["React", "Vue", "NextJS"] },
  { Test: ["Cucumber", "Capybara", "Selenium"] }
);

const backEndDeveloper = new BackEnd(
  "Jonas",
  22,
  95.5,
  1.8,
  { Languages: ["PHP", "Ruby", "Go"] },
  { Relationals: ["MariaDB", "SQL Server"], NoRelationals: ["MongoDB"] },
  { DataFlow: ["Apache Kafka", "RabbitMQ", "Redis"] }
);

document.getElementById("app").innerHTML = `
<section>
  <details>
    <summary>Informações do primeiro usuário: </summary>
    <p>${user.info()}</p>
  </details>
</section>
<section>
  <details>
    <summary>Informações do dev front-end: </summary>
    <p>${frontEndDeveloper.info()}</p>
  </details>
</section>
<section>
  <details>
    <summary>Informações do dev back-end: </summary>
    <p>${backEndDeveloper.info()}</p>
  </details>
</section>
`;
