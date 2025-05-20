export function getPrompt(materia) {
  switch (materia.toLowerCase()) {
    case "arte":
      return "¿Querés ayuda con styles o con HTML?";
    case "programacion":
      return "¿Views, CSS, imágenes o lógica?";
    case "efsi":
      return "¿Planificación de sistemas o desarrollo técnico?";
    case "bd":
      return "¿Consultas SQL, diseño de tablas o relaciones?";
    case "ti":
      return "¿Es sobre componentes o arquitectura?";
    default:
      return "Decime la materia y te oriento.";
  }
}
