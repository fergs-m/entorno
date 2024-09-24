//requerimientos 
const express = require('express');

const router = express.Router();

const funcionesPagina = require('../controller/paginaController');

const funcionDosImagenes = require('../controller/dosImagenesController')

//Rutas

router.get('/', funcionesPagina.todasLasImagenes);
router.get('/dosImagen', funcionDosImagenes.dosImagenes)

module.exports = router; 

