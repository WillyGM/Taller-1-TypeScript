// main.ts
import { tvSeries } from "./data";

window.addEventListener("load", () => {
  const tbody = document.getElementById("contenido-series");
  const divPromedio = document.getElementById("promedio-temporadas");

  if (!tbody || !divPromedio) return;

  let sumaTemporadas = 0;

  tvSeries.forEach((serie) => {
    sumaTemporadas += serie.numTemporadas;
    const fila = document.createElement("tr");

    const celdaId = document.createElement("td");
    celdaId.textContent = serie.id.toString();
    fila.appendChild(celdaId);

    const celdaTitulo = document.createElement("td");
    celdaTitulo.textContent = serie.titulo;
    fila.appendChild(celdaTitulo);

    const celdaCanal = document.createElement("td");
    celdaCanal.textContent = serie.canal;
    fila.appendChild(celdaCanal);

    const celdaTemporadas = document.createElement("td");
    celdaTemporadas.textContent = serie.numTemporadas.toString();
    fila.appendChild(celdaTemporadas);

    tbody.appendChild(fila);
  });

  const promedio = sumaTemporadas / tvSeries.length;
  divPromedio.textContent = `Promedio de temporadas: ${promedio.toFixed(2)}`;
});
