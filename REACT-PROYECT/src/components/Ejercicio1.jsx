import { useEffect, useState } from "react";
export const Contador = () => {
  const [contador, setContador] = useState(0);
  console.log(contador);
  return (
    <>
      <h1>Contador</h1>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <button onClick={() => setContador(contador - 1)}>Restar</button>
    </>
  );
};
