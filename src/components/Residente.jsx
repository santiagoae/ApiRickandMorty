import React, { useEffect, useState } from "react";

function Residente({ item, index }) {
  const [residente, setResidente] = useState([]);

  const Residentes = async (residents) => {
    let apisResidentes = await Promise.all([
      ...residents.map((residentes) => fetchResidente(residentes)),
    ]);
    setResidente(apisResidentes);
  };

  useEffect(() => {
    Residentes(item.residents);
  }, []);

  const fetchResidente = async (url) => {
    let cualqueira = await fetch(url);
    let data = await cualqueira.json();
    return data;
  };

  const formulario = document.querySelector("#formulario");
  const boton = document.querySelector("#boton");
  const resultado = document.querySelector("#resultado");

  //intento de busqueda
  const filtrar = () => {
    resultado.innerHTML = "";

    const texto = formulario.value.toLowerCase();
    for (let busqueda of item) {
      let nombre = busqueda.name.toLowerCase();
      if (nombre.indexof(texto) !== -1) {
        resultado.innerHTML += `
        <div className="container">
          <div className="card ">
            <div className="card-body">
              <h1 className="card-title">${busqueda.name}</h1>
              <hr />
              <p>Tipo: ${busqueda.type}</p>
              <p>Dimension: ${busqueda.dimension}</p>
              <p>Residentes:</p>
              <hr />
              <p>Creada el: ${busqueda.created}</p>
            </div
          </div
        </div
        `;
      }
    }
    if(resultado.innerHTML === ""){
      resultado.innerHTML = "<p>producto no encontrado</p>";
    }
  };
  boton.addEventListener("click", filtrar);
  ///
  return (
    <div className="container" id="resultado" key={index}>
      <div className="card ">
        <div className="card-body">
          <h1 className="card-title">{item.name}</h1>
          <hr />
          <p>Tipo: {item.type}</p>
          <p>Dimension: {item.dimension}</p>
          <p>Residentes:</p>
          <div className="row">
            {residente &&
              residente.map((x, i) => (
                <div className="col" key={i}>
                  <div className="card cardResidents">
                    <img src={x.image} alt="img" />
                    <p>{x.name}</p>
                  </div>
                </div>
              ))}
          </div>

          <hr />
          <p>Creada el: {item.created}</p>
        </div>
      </div>
    </div>
  );
}

export default Residente;
