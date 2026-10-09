import { Component } from "react";
export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <h2>Menú de Rutas</h2>
        <ul id="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/doctoresespecialidad">Doctores por Especialidad </a>
          </li>
        </ul>
      </div>
    );
  }
}
