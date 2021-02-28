const express = require('express')
const router = express.Router();
const distribuidoresController = require('../controller/distribuidoresController');
const pool = require('../database');

router.get('/lista', distribuidoresController.ListarDistribuidores);
router.get('/listar/:id', distribuidoresController.ListarDistribuidor);
router.put('/update/:id', distribuidoresController.ModificarDistribuidor);
router.post('/add', distribuidoresController.AgregarDistribuidor);
router.delete('/delete/:id', distribuidoresController.EliminarDistribuidor);

module.exports = router;