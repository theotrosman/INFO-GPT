import { loadConfig } from './configLoader.js';
import { getPrompt } from './materiaHelper.js';

const config = loadConfig('./gpt-config.json');
if (config) {
  console.log(`👑 Bienvenido al ${config.name}`);
  const materia = "programacion";
  console.log(getPrompt(materia));
}
