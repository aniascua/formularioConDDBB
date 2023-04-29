require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const path = require('path');

const app = express();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/formulario', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;

    console.log(`Datos del formulario recibidos: ${nombre}, ${email}`);

    const query = {
        text: 'INSERT INTO nombres(nombre, email) VALUES($1, $2) RETURNING *',
        values: [nombre, email],
    };

    client.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(`Error al guardar datos: ${err.message}`);
        } else {
            console.log(result.rows[0]);
            // Enviar solo los valores del último registro insertado en la respuesta
            const { id, ...rest } = result.rows[0];
            res.send(`Gracias por suscribirte, ${nombre}!`);
        }
    });
});

// Agregamos la ruta para devolver el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});
