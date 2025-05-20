const gptConfig = {
  name: "Rey del Labo GPT",
  creator: "Theo Trosman",
  materias: ["Arte", "EFSI", "Programación", "BD", "TI"],
  modoTP: true,
  nivel: "4to año ORT"
};

function getSaludo(materia) {
  switch (materia.toLowerCase()) {
    case "arte":
      return "¿Es para styles o HTML?";
    case "programacion":
      return "¿Views (cshtml), CSS, imágenes o lógica?";
    case "efsi":
      return "¿Planificación, ideas o ayuda técnica?";
    case "bd":
      return "¿Consultas, relaciones o estructura?";
    case "ti":
      return "¿Componentes, arquitectura o algo puntual?";
    default:
      return "Decime la materia y te doy una mano.";
  }
}

console.log(`👑 ${gptConfig.name} por ${gptConfig.creator}`);
console.log("Materias soportadas:", gptConfig.materias.join(", "));
console.log(getSaludo("programacion"));
