import pool from '../config/db.js'

const crearUsuario = async(datos) => {
    try{ 
        const query = {
        text: 'insert into usuarios (nombre, balance) values ($1, $2) returning *',
        values: datos
        }
        const response = await pool.query(query)
        return response.rows[0]
        
        }catch(error) {
        (console.log(error.message))
        }
    }

export {crearUsuario}