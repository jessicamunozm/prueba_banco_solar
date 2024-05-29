import express from "express";
const app = express ()
const PORT = process.env.PORT || 3000
import router from './router/routes.js'

app.use(express.static('views'));
app.use(express.json())
app.use('/', router)


app.listen (PORT, () =>
console.log(`http://localhost:${PORT}`)
)