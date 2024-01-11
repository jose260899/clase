import express from 'express';
import { rutas } from './utils/rutas.js';



console.log('Bienvenido a mi App')



const port = 3000;

const app = express();
console.log('------------------------------------');


app.set('view engine', 'ejs');
app.set('views', rutas.views); // cambiar


app.get('/saludo', (req, res, next) => {
    res.render('prueba', {nombre: 'Jose'});
});


app.get('/automovil', (req, res, next) => {
    console.log('Paso por automovil');
    res.redirect('/coche');
});

app.use('/coche', (req, res, next) => {
    console.log('Paso por coche');
    next();
});

app.use('/', (req, res, next) => {
    console.log('Paso por el middleware 3');
    res.status(404 ).send({"message": "No se encontro la ruta"});
});

app.use('/coche', (req, res, next) => {
    console.log('Paso por el coche 2');
    res.send({"message": "coche 2"});
});



app.listen(port);
console.log("Servidor escuchando en el puerto: " + port);


