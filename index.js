// --> no pude realizar la de transferencias <-- //

import express, { Router } from "express"
import router from './router/routes.js'

process.loadEnvFile()

const app = express ()
const PORT = process.env.PORT || 3000

app.use(express.static('views'))
app.use(express.json())
app.use('/', router)


app.listen (PORT, () =>
console.log(`http://localhost:${PORT}`)
)