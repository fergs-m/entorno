//requeridos
const express = require('express'); // requerir express
const bunyan = require('bunyan');//mejor console.log
const cors = require('cors'); //permite usar la misma api que hemos creado con localhost
const logger = bunyan.createLogger({name: 'Servidor'});
const paginaRouter = require('./routes/paginaRouter');
const dosImagenesRouter = require('./routes/dosRouter')
const PORT = process.env.PORT || 3000

//llamados para usar

const app = express(); // Se crea la aplicación
app.use(cors()); //se le dice a la app que use cors
app.use(express.static(__dirname+'/public')); //se le dice que busque siempre los archivos estaticos en public
app.use('/paginas', paginaRouter);
app.use('/dosImagen', dosImagenesRouter);

//Gestionar errores con trye y catch
app.get('/', (req, res, next) => {

    try {

        res.status(200).json('Haciendo GET en /');

    } catch (err) {

        next (err);
    }
})


//Middlewere error 500
app.use( (err, req, res, next) => {


    res.status(500).json('Error en la API');

});


//Middleware error 400
app.use(( req, res ) => {

    res.status(404).send('<h1> Ruta no encontrada <h1/>')

});


//puerto donde la app escucha

app.listen(PORT, () => {

    logger.info('Servidor encendido')
})