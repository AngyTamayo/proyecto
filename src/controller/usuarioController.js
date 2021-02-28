const database = require('../database');
const express = require('express');

exports.ListarUsuarios = async (req,res) => {
    try{
        const usuario = await database.query("SELECT * FROM usuario")
        res.status(200).json({usuario});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.ListarUsuario = async (req,res) => {
    try{ 
        const{id} = req.params;
        const Lisusuario = await database.query("SELECT * FROM usuario WHERE id = ?", [id])
        res.status(200).json({Lisusuario});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.AgregarUsuario = async (req,res) => {
    try {
        const { nombre, edad, correo} = req.body;
        const AgUsuario = {nombre, edad, correo};
        await database.query("INSERT INTO usuario set ?", [AgUsuario]);
        res.status(200).json({ msg: "usuario agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarUsuario = async (req,res) => {
    try {
        const { id } = req.params;
        const {nombre, edad, correo} = req.body;
        const editar = {nombre, edad, correo};
        const editarUsu = await database.query("UPDATE usuario SET ? WHERE id = ?", [editar, id]);

        res.status(200).json({editarUsu, msg: "usuario modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarUsuario = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM usuario WHERE id = ?", [id]);
        res.status(200).json({ msg: "usuario eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}