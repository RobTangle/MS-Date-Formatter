import app from "./src/app";
import { config } from "./src/config/config";
const PORT = config?.server?.port || 3001;

app.listen(PORT, () => {
  console.log("Escuchando en el puerto " + PORT);
});
