const express = require('express')
const router = express.Router();
const compraController = require('../controller/compraController');
const pool = require('../database');

router.get('/lista', compraController.ListarCompras);
router.get('/listar/:id', compraController.ListarCompra);
router.put('/update/:id', compraController.ModificarCompra);
router.post('/add', compraController.AgregarCompra);
router.delete('/delete/:id', compraController.EliminarCompra);

module.exports = router;