const express = require('express')
const router = express.Router();
const usuarioController = require('../controller/usuarioController');
const pool = require('../database');

router.get('/lista', usuarioController.ListarUsuarios);
router.get('/listar/:id', usuarioController.ListarUsuario);
router.put('/update/:id', usuarioController.ModificarUsuario);
router.post('/add', usuarioController.AgregarUsuario);
router.delete('/delete/:id', usuarioController.EliminarUsuario);

module.exports = router;