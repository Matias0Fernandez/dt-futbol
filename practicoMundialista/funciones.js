const MUNDIALES = require("./MUNDIALES");

const newMundial = (newMundial) =>
  MUNDIALES.find((mundial) => mundial.anio === newMundial.anio);

const findIndexMundial = (year) => {
  const mundialIndex = MUNDIALES.findIndex((mundial) => mundial.anio === year);
  if (mundialIndex === -1) {
    return null;
  } else {
    return mundialIndex;
  }
};

const findMundial = (year) => {
  const mundial = MUNDIALES.find((mundial) => mundial.anio === year);
  if (!mundial) {
    return null;
  } else {
    return mundial;
  }
};

const getHomeGreet = () => (_, res) => res.send("hi");
const getMundiales = (mundiales) => (_, res) => res.send(mundiales);
const createNewMundial = (mundiales) => (req, res) => {
  if (!req.body.anio || !req.body.anfitrion || !req.body.ganador) {
    res
      .status(400)
      .send(
        "Please, send the whole data from the body: anio, anfitrion, ganador."
      );
  } else {
    const { anio, anfitrion, ganador } = req.body;

    const nuevoMundial = {
      anio: parseInt(anio),
      anfitrion: anfitrion,
      ganador: ganador,
    };

    mundiales.push(nuevoMundial);
    res.send(newMundial(newMundial));
  }
};
const borrarMundial = (mundiales) => (req, res) => {
  const year = parseInt(req.params.anio);
  const index = findIndexMundial(year ?? 0);

  {
    index
      ? res.send(mundiales.splice(index, 1))
      : res.status(404).send("Mundial no encontrado");
  }
};
const editParcialMundial = () => (req, res) => {
  const year = parseInt(req.params.anio);
  const mundialEdit = findMundial(year ?? 0);

  const { anio, anfitrion, ganador } = req.body;

  mundialEdit.anio = !anio || anio === undefined ? mundialEdit.anio : anio;
  mundialEdit.anfitrion =
    !anfitrion || anfitrion === undefined ? mundialEdit.anfitrion : anfitrion;
  mundialEdit.ganador =
    !ganador || ganador === undefined ? mundialEdit.ganador : ganador;

  res.send(mundialEdit);
};

const editWholeMundial = () => (req, res) => {
  const { anio, anfitrion, ganador } = req.body;
  const year = parseInt(req.params.anio);

  const mundialEdit = findMundial(year ?? 0);

  mundialEdit.anio = anio;
  mundialEdit.anfitrion = anfitrion;
  mundialEdit.ganador = ganador;

  res.send(mundialEdit);
};

module.exports = {
  getMundiales,
  getHomeGreet,
  findMundial,
  findIndexMundial,
  newMundial,
  createNewMundial,
  borrarMundial,
  editParcialMundial,
  editWholeMundial,
};
