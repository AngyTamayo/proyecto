const express = require('express')
const router = express.Router();
const productoController = require('../controller/productoController');
const pool = require('../database');

router.get('/lista', productoController.ListarProductos);
router.get('/listar/:id', productoController.ListarProducto);
router.put('/update/:id', productoController.ModificarProducto);
router.post('/add', productoController.AgregarProducto);
router.delete('/delete/:id', productoController.EliminarProducto);

module.exports = router;