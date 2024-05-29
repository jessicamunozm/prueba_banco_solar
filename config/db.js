import pkg from 'pg'
const {Pool} = pkg
process.loadEnvFile()

const {HOST, PASSWORD, USER, DATABASE} = process.env

const config = {
    user: USER,
    password: PASSWORD,
    host: HOST,
    database: DATABASE,
    allowExitOnIdle: true
}

const pool = new Pool (config)
export default pool