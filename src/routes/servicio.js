const express = require('express')
const router = express.Router();
const servicioController = require('../controller/servicioController');
const pool = require('../database');

router.get('/lista', servicioController.ListarServicios);
router.get('/listar/:id', servicioController.ListarServicio);
router.put('/update/:id', servicioController.ModificarServicio);
router.post('/add', servicioController.AgregarServicio);
router.delete('/delete/:id', servicioController.EliminarServicio);

module.exports = router;