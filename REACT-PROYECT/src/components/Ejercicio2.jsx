import { useState } from "react";

export const Nombre = () => {
  const [nombre, setNombre] = useState("0");
  const [nombree, setNmbree] = useState("1");
  return (
    <>
      <input
        type="text"
        values={nombre}
        onChange={(x) => setNombre(x.target.value)}
      />
      <p>Escribiste {nombre}</p>
    </>
  );
};
