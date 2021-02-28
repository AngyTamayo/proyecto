const express = require('express')
const router = express.Router();
const inventarioController = require('../controller/inventarioController');
const pool = require('../database');

router.get('/lista', inventarioController.ListarInventarios);
router.get('/listar/:id', inventarioController.ListarInventario);
router.put('/update/:id', inventarioController.ModificarInventario);
router.post('/add', inventarioController.AgregarInventario);
router.delete('/delete/:id', inventarioController.EliminarInventario);

module.exports = router;