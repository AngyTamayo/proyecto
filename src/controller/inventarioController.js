const database = require('../database');
const express = require('express');

exports.ListarInventarios = async (req,res) => {
    try{
        const pqr = await database.query("SELECT * FROM inventario")
        res.status(200).json({pqr});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.ListarInventario = async (req,res) => {
    try{ 
        const{id} = req.params;
        const Lisinven = await database.query("SELECT * FROM inventario WHERE id = ?", [id])
        res.status(200).json({Lisinven});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.AgregarInventario = async (req,res) => {
    try {
        const {producto, marca, cantidad, codigo} = req.body;
        const Aginven = {producto, marca, cantidad, codigo};
        await database.query("INSERT INTO inventario set ?", [Aginven]);
        res.status(200).json({ msg: "inventario agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarInventario = async (req,res) => {
    try {
        const { id } = req.params;
        const {producto, marca, cantidad, codigo} = req.body;
        const editar = {producto, marca, cantidad, codigo};
        const editarInven= await database.query("UPDATE inventario SET ? WHERE id = ?", [editar, id]);

        res.status(200).json({editarInven, msg: "Inventario modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarInventario = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM inventario WHERE id = ?", [id]);
        res.status(200).json({ msg: "inventario eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}