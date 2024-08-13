// const express = require('express')
// const jugador = require('../practico/3-jugador/jugador')

// const PORT = 3000
// const HOSTNAME = "http://localhost:"

// const app = express()

// app.get('/', (req, res) => res.send('welcome to my app!'))
// app.get('/message/:message', (req, res) => {
//     const message = req.params.message
//     res.send(`su mensaje es: ${message}`)
// })
// app.get('/error', (req, res) => res.status(400).send('codigo de error: 400'))
// app.get('/', (req, res) => res.send('welcome to my app!'))

// app.get('/include/:texto/:cadena', (req, res) => {
//     const texto = req.params.texto
//     const cadena = req.params.cadena
//     {
//         cadena.includes(texto) ?
//             res.send(`la cadena ${cadena} incluye ${texto}`) :
//             res.send(`la cadena ${cadena} no incluye ${texto}`)
//     }
// })

// app.listen(PORT, () => console.log(`server running on: ${HOSTNAME}${PORT}`))
