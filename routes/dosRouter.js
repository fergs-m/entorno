//requerimientos 
const express = require('express');

const router = express.Router();

const funcionDosImagenes = require('../controller/dosImagenesController')

//Rutas

router.get('/', funcionDosImagenes.dosImagenes)

module.exports = router; 
