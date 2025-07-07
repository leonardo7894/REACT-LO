import { useState } from "react";

export const Juntos = () => {
  const [nombre2, setNombre2] = useState("");  // Estado para el input
  const [nombreMostrado, setNombreMostrado] = useState("");  // Estado para mostrar el nombre

  const setearNombre = (event) => {
    setNombre2(event.target.value);  // Actualiza el estado del input
  };

  const mostrarNombre = () => {
    setNombreMostrado(nombre2);  // Cuando se hace clic, actualiza el nombre mostrado
  };

  return (
    <>
      <input
        type="text"
        value={nombre2}
        onChange={setearNombre}
      />
      <button onClick={mostrarNombre}>Agregar Nombre</button>
      {nombreMostrado && <p>Hola {nombreMostrado}, ¿cómo estás?</p>}  {/* Solo muestra el nombre si hay uno */}
    </>
  );
};



/*import { useState } from "react";

export const Juntos = () => {
  const [nombre2, setNombre2] = useState("0");
  console.log(nombre2);
  
  const setearNombre = (event) => {
    setNombre2(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        value={nombre2}  // Cambié 'values' a 'value'
        onChange={setearNombre}  // Asegúrate de pasar 'setearNombre'
      />
      <button onClick={() => setearNombre({ target: { value: nombre2 } })}>Agregar Nombre</button>
      <p>Hola {nombre2}, ¿cómo estás?</p>
    </>
  );
};
*/