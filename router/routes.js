import express from 'express'
import path from "path"
import {addUser, getUser, editUser} from '../queries/consultas.js'

const __dirname = import.meta.dirname
const router = express.Router()

router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.post('/usuario', async(req,res) => {
    try{
    const {nombre, balance}=req.body
    const data = [nombre, balance]
    const result = await addUser (data)
    res.status(500).send(result.rows)
    }catch(err){ 
        send(error.message)
    }
})

router.get('/usuarios', async(req,res) => {
    try{
    const result = await getUser()
    res.status(201).json(result)
    }catch(err){
        send(error.message)
    }
})

router.put('/usuario', async(req,res) => {
    try{
    const {id}=req.query
    const {nombre, balance} = req.body
    const result = await editUser(nombre, balance, id)
    res.status(201).send(result)
    }catch(err){
        send(error.message)
    }
})

router.get('*', (req,res) => {
    res.send(' no se consigue la ruta')
})

export default router   