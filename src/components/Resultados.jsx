import React, { useEffect, useState } from "react";
import Residente from "./Residente";
import Navegacion from "./Navegacion";

function Resultados() {
  const [resultados, setResultados] = useState([]);
  const [info, setInfo] = useState({});

  const urlApi = "https://rickandmortyapi.com/api/location?page=1";

  //buscar la forma de hacer un preventDefault para ver si no se recarga la pagina y cambien las imagene y funcione el buscar
  const fetchResultados = async (url) => {    
    let respuesta = await fetch(url);
    let data = await respuesta.json();
    setResultados(data.results);
    setInfo(data.info);
  };
  console.log("resultados", resultados);

  useEffect(() => {
    fetchResultados(urlApi);
  }, []);

  const onPrevious = () => {
    fetchResultados(info.prev);    
  };
  const onNext = () => {
    fetchResultados(info.next);    
  };

  return (
    <div>
      <Navegacion
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div>
        {resultados && resultados.map((item, index) => (
          <Residente item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Resultados;
