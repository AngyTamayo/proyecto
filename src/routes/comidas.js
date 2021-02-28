const express = require('express')
const router = express.Router();
const comidasController = require('../controller/comidasController');
const pool = require('../database');

router.get('/lista', comidasController.ListarComidas);
router.get('/listar/:id', comidasController.ListarComida);
router.put('/update/:id', comidasController.ModificarComida);
router.post('/add', comidasController.AgregarComida);
router.delete('/delete/:id', comidasController.EliminarComida);

module.exports = router;