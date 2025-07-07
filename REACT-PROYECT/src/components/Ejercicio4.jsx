import { useEffect, useState } from "react";

export const Cargando = () => {
  const [cargando, setCargando] = useState("Cargando...");
  useEffect(() => {
    setTimeout(() => {
      setCargando("Listo!");
    }, 3000);
  }, []);
  return (
    <>{cargando === "Cargando..." ? <p>Cargando...</p> : <p>{cargando}</p>}</>
  );
};
