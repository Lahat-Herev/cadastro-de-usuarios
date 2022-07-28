import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import "./styles.css";
import User from "./User";

const user = new User("Joao", 20, 75.5, 1.67);
const frontEndDeveloper = new FrontEnd("Jose", 21, 85.5, 1.57, {"ProtoType": "Figma", "IDE": "VS Code", "API": "Postman"}, {"JS": "React"}, {"Test": ["Cucumber", "Capybara", "Selenium"]});
const backEndDeveloper = new BackEnd("Jonas", 22, 95.5, 1.80, {"Languages" : ["PHP", "Ruby", "Go"]}, {"Relationals": ["MariaDB", "SQL Server"], "NoRelationals": ["MongoDB"]}, {"Data Flow": ["Apache Kafka", "RabbitMQ", "Redis"]});

document.getElementById("app").innerHTML = `
<section>
  <details>
    <summary>Informações do primeiro usuário: </summary>
    <p>${user.info()}</p>
  </details>
</section>
<section>
  <details>
    <summary>Informações do segundo usuário: </summary>
    <p>${frontEndDeveloper.info()}</p>
  </details>
</section>
<section>
  <details>
    <summary>Informações do terceiro usuário: </summary>
    <p>${backEndDeveloper.info()}</p>
  </details>
</section>
`;
