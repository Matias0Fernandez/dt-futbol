const express = require("express");
const MUNDIALES = require("./MUNDIALES");
const app = express();
const {
  getMundiales,
  createNewMundial,
  borrarMundial,
  editParcialMundial,
  editWholeMundial,
} = require("./funciones");
app.use(express.json());
const router = express.Router();

router.patch("/:anio", editParcialMundial);

router.put("/:anio", editWholeMundial);

router.get("/", getMundiales(MUNDIALES));

router.post("/", createNewMundial(MUNDIALES));

router.delete("/:anio", borrarMundial(MUNDIALES));

module.exports = { router };
