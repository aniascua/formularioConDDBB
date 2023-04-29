require('dotenv').config(); // carga las variables de entorno definidas en el archivo .env

const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect((err) => {
    if (err) {
        console.error('Error al conectarse a la base de datos', err.stack)
    } else {
        console.log('Conexión exitosa a la base de datos')
        client.query('SELECT * FROM nombres', (err, res) => {
            if (err) throw err
            console.log(res.rows)
            client.end()
        })
    }
});
