const express = require('express')
const router = express.Router();
const empleadoController = require('../controller/empleadoController');
const pool = require('../database');

router.get('/lista', empleadoController.ListarEmpleados);
router.get('/listar/:id', empleadoController.ListarEmpleado);
router.put('/update/:id', empleadoController.ModificarEmpleado);
router.post('/add', empleadoController.AgregarEmpleado);
router.delete('/delete/:id', empleadoController.EliminarEmpleado);

module.exports = router;