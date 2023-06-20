const mysql2 = require('mysql2');
const coneccion = ()=>{
    const conet =  mysql2.createConnection({
        host: process.env.DATABASE_HOST || 'localhost',
        user: process.env.DATABASE_USER ||   'root',
        password: process.env.DATABASE_PASSWORD ||'mysecretpassword',
        database: process.env.DATABASE_NAME || 'mi_base_de_datos'

    });
    return conet
}

async function Tabla(){
    const sql= `CREATE TABLE IF NOT EXISTS productos(
        id INT NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(100) NOT NULL,
        precio FLOAT NOT NULL,
        PRIMARY KEY (id)
    )`
    const conn = coneccion()
    return conn.promise().query(sql)

}

module.exports={coneccion,Tabla}