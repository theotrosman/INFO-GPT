import fs from 'fs';

export function loadConfig(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error cargando la configuración:", error.message);
    return null;
  }
}
