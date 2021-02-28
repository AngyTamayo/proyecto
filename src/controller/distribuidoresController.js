const database = require('../database');
const express = require('express');

exports.ListarDistribuidores = async (req,res) => {
    try{
        const distribuidores = await database.query("SELECT * FROM distribuidores")
        res.status(200).json({distribuidores});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.ListarDistribuidor = async (req,res) => {
    try{ 
        const{id} = req.params;
        const Lisdistri = await database.query("SELECT * FROM distribuidores WHERE id = ?", [id])
        res.status(200).json({Lisdistri});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.AgregarDistribuidor = async (req,res) => {
    try {
        const {nombre,empresa} = req.body;
        const AgDistri = {nombre,empresa};
        await database.query("INSERT INTO distribuidores set ?", [AgDistri]);
        res.status(200).json({ msg: "distribuidor agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarDistribuidor = async (req,res) => {
    try {
        const { id } = req.params;
        const {nombre,empresa} = req.body;
        const editar = {nombre,empresa};
        const editarDistri= await database.query("UPDATE distribuidores SET ? WHERE id = ?", [editar, id]);

        res.status(200).json({editarDistri, msg: "distribuidores modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarDistribuidor = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM distribuidores WHERE id = ?", [id]);
        res.status(200).json({ msg: "distribuidores eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}