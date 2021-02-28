const database = require('../database');
const express = require('express');

exports.ListarCompras = async (req,res) => {
    try{
        const pqr = await database.query("SELECT * FROM compra")
        res.status(200).json({pqr});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.ListarCompra = async (req,res) => {
    try{ 
        const{id} = req.params;
        const Liscompra = await database.query("SELECT * FROM compra WHERE id = ?", [id])
        res.status(200).json({Liscompra});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.AgregarCompra = async (req,res) => {
    try {
        const {nombre,barrio,dirección,telefono} = req.body;
        const AgCompra = {nombre,barrio,dirección,telefono};
        await database.query("INSERT INTO compra set ?", [AgCompra]);
        res.status(200).json({ msg: "compra agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarCompra = async (req,res) => {
    try {
        const { id } = req.params;
        const {nombre,barrio,dirección,telefono} = req.body;
        const editar = {nombre,barrio,dirección,telefono};
        const editarCompra= await database.query("UPDATE compra SET ? WHERE id = ?", [editar, id]);

        res.status(200).json({editarCompra, msg: "compra modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarCompra = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM compra WHERE id = ?", [id]);
        res.status(200).json({ msg: "compra eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}