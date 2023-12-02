import { useEffect, useState } from "react";

export function LocalStorage() {
  function obtenerData() {
    var data = localStorage.getItem("Datos");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  const [Datos, setDatos] = useState(obtenerData());

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(Datos));
  }, []);

  setDatos(...Datos);

  return { Datos };
}
