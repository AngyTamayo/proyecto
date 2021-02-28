const express = require('express')
const router = express.Router();
const pqrController = require('../controller/pqrController');
const pool = require('../database');

router.get('/lista', pqrController.ListarPqrs);
router.get('/listar/:id', pqrController.ListarPqr);
router.put('/update/:id', pqrController.ModificarPqr);
router.post('/add', pqrController.AgregarPqr);
router.delete('/delete/:id', pqrController.EliminarPqr);

module.exports = router;