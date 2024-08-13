const express = require("express");
const app = express();
const mundialesRoutes = require("./mundialesRoutes");
const getHomeGreet = require("./funciones");
app.use(express.json());

const PORT = 3000;

// Definición de rutas
// - Una ruta GET para obtener los mundiales que tenga registrados (la lista actual)
// - Una ruta POST que me permita registrar un nuevo mundial (falta el de Catar por ejemplo)
// - Una ruta PATCH que me permita actualizar un mundial que exista (el de 2010 no fue en Australia)
// - Una ruta DELETE que me permita borrar un mundial que exista (borremos el primero que es el más viejo)
// - Una ruta PUT para que esté completo je.

app.get("/", getHomeGreet);

app.use("/mundiales", mundialesRoutes.router);

app.listen(PORT, () => {
  console.log(`Escuchando peticiones en el puerto ${PORT}...`);
});
