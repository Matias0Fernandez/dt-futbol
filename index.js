const express = require('express')
const jugador = require('./practico/3-jugador/jugador')

const PORT = 3000
const app = express()

app.get('/', (res) => res.send('hello, world!'))
app.get('/jugadores', (res) => res.send(jugador.retornar()))

app.listen(PORT, () => console.log(`server running on port ${PORT}!  \n -- (server):  http://localhost:${PORT}`))