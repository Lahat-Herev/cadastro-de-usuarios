import "./styles.css";
import Users from "./Users";

const user = new Users("Pedro Arthur", 20, 75.5, 1.67);

document.getElementById("app").innerHTML = `
<section>
  <details>
    <summary>Minhas informações: </summary>
    <p>${user.info()}</p>
  </details>
</section>
`;
