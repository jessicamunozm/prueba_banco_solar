import pool from '../config/db.js'

const addUser = async(datos) => {
    try{ 
        const consulta = {
        text: 'insert into usuarios (nombre, balance) values ($1, $2) returning *',
        values: datos
        }
        const result = await pool.query(consulta)
        return result.rows
        
        }catch(error) {
        (console.log(error.message))
        }
    }

const getUser = async() => {
    try{ 
        const consulta = {
        text: 'select * from usuarios'
        }
        const result = await pool.query(consulta)
        return result.rows
        
        }catch(error) {
        (console.log(error.message))
        }
    }

const editUser = async(nombre, balance, id) => {
    try{ 
        const consulta = {
        text: 'update usuarios set nombre = $1, balance = $2 where id = $3 returning *',
        values: [nombre, balance, id]
        }
        const result = await pool.query(consulta)
        return result.rows
        
        }catch(error) {
        (console.log(error.message))
        }}

export {addUser, getUser, editUser}