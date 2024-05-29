import express from 'express'
const router = express.Router()
import path from "path"
import {crearUsuario} from '../queries/consultas.js'
const __dirname = import.meta.dirname

// ● / GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba.
// ● /usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.
// ● /usuarios GET: Devuelve todos los usuarios registrados con sus balances.
// ● /usuario PUT: Recibe los datos modificados de un usuario registrado y los actualiza.
// ● /usuario DELETE: Recibe el id de un usuario registrado y lo elimina .
// ● /transferencia POST: Recibe los datos para realizar una nueva transferencia. Se 
// debe ocupar una transacción SQL en la consulta a la base de datos.
// ● /transferencias GET: Devuelve todas las transferencias almacenadas en la base de 
// datos en formato de arreglo


router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.post('/usuario', async(req,res) => {
    const {nombre, balance}=req.body
    console.log(req.body)
    const datos = [nombre, balance]
    console.log(datos)
    await crearUsuario(datos)
    res.send('Usuario agregado')
})


router.get('*', (req,res) => {
    res.send(' no se consigue la ruta')
})

export default router