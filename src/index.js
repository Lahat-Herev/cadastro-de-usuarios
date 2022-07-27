import "./styles.css";
import User from "./User";

const user = new User("Pedro Arthur", 20, 75.5, 1.67);

document.getElementById("app").innerHTML = `
<section>
  <details>
    <summary>Minhas informações: </summary>
    <p>${user.info()}</p>
  </details>
</section>
`;
