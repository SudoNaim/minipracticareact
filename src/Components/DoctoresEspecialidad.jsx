import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class DoctoresEspecialidad extends Component {
  state = {
    especialidades: [],
    doctores: [],
  };
  selectReferencia = React.createRef();
  urlApi = Global.urlApi;

  //Funciones
  loadEspecialidades = () => {
    axios.get(this.urlApi + "Doctores/Especialidades").then((res) => {
      this.setState({
        especialidades: res.data,
      });

      console.log("Especialidades cargadas:", this.state.especialidades);
    });
  };

  loadDoctores = (event) => {
    event.preventDefault();
    let especialidadSeleccionada = this.selectReferencia.current.value;
    axios
      .get(
        this.urlApi +
          "Doctores/DoctoresEspecialidad/" +
          especialidadSeleccionada,
      )
      .then((res) => {
        this.setState({
          doctores: res.data,
        });
      });
  };
  componentDidMount = () => {
    this.loadEspecialidades();
  };

  render() {
    return (
      <div>
        <h1>Doctores por Especialidad</h1>
        <form>
          <label>Seleccione la especialidad: </label>
          <select ref={this.selectReferencia}>
            {this.state.especialidades.map((especialidad, index) => {
              return (
                <option key={index} value={especialidad}>
                  {especialidad}
                </option>
              );
            })}
          </select>
          <button onClick={this.loadDoctores}>Mostrar</button>
        </form>
        <ul>
          {this.state.doctores.map((doctor, index) => {
            return (
              <li key={index}>
                {doctor.apellido} {doctor.salario} - {doctor.especialidad}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
