const database = require('../database');
const express = require('express');

exports.ListarPqrs = async (req,res) => {
    try{
        const pqr = await database.query("SELECT * FROM pqr")
        res.status(200).json({pqr});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.ListarPqr = async (req,res) => {
    try{ 
        const{id} = req.params;
        const Lispqr = await database.query("SELECT * FROM pqr WHERE id = ?", [id])
        res.status(200).json({Lispqr});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.AgregarPqr = async (req,res) => {
    try {
        const {sugerencia} = req.body;
        const AgPqr = {sugerencia};
        await database.query("INSERT INTO pqr set ?", [AgPqr]);
        res.status(200).json({ msg: "pqr agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarPqr = async (req,res) => {
    try {
        const { id } = req.params;
        const {sugerencia} = req.body;
        const editar = {sugerencia};
        const editarPqr= await database.query("UPDATE pqr SET ? WHERE id = ?", [editar, id]);

        res.status(200).json({editarPqr, msg: "pqr modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarPqr = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM pqr WHERE id = ?", [id]);
        res.status(200).json({ msg: "pqr eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}