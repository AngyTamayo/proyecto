const database = require('../database');
const express = require('express');

exports.ListarProductos = async (req,res) => {
    try{
        const producto = await database.query("SELECT * FROM producto")
        res.status(200).json({producto});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.ListarProducto = async (req,res) => {
    try{ 
        const{id} = req.params;
        const Lisprodu = await database.query("SELECT * FROM producto WHERE id = ?", [id])
        res.status(200).json({Lisprodu});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.AgregarProducto = async (req,res) => {
    try {
        const {producto, descripcion, precio} = req.body;
        const AgProducto = {producto, descripcion, precio};
        await database.query("INSERT INTO producto set ?", [AgProducto]);
        res.status(200).json({ msg: "producto agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarProducto = async (req,res) => {
    try {
        const { id } = req.params;
        const {producto, descripcion, precio} = req.body;
        const editar = {producto, descripcion, precio};
        const editarProdu = await database.query("UPDATE producto SET ? WHERE id = ?", [editar, id]);

        res.status(200).json({editarProdu, msg: "producto modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarProducto = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM producto WHERE id = ?", [id]);
        res.status(200).json({ msg: "producto eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}