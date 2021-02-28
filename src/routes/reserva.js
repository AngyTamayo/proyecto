const express = require('express')
const router = express.Router();
const reservaController = require('../controller/reservaController');
const pool = require('../database');

router.get('/lista', reservaController.ListarReservas);
router.get('/listar/:id', reservaController.ListarReserva);
router.put('/update/:id', reservaController.ModificarReserva);
router.post('/add', reservaController.AgregarReserva);
router.delete('/delete/:id', reservaController.EliminarReserva);

module.exports = router;