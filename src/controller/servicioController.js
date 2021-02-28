const database = require('../database');
const express = require('express');

exports.ListarServicios = async (req,res) => {
    try{
        const servicio = await database.query("SELECT * FROM servicio")
        res.status(200).json({servicio});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.ListarServicio = async (req,res) => {
    try{ 
        const{id} = req.params;
        const Lisservicio = await database.query("SELECT * FROM servicio WHERE id = ?", [id])
        res.status(200).json({Lisservicio});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.AgregarServicio = async (req,res) => {
    try {
        const {servicio, descripcion, precio} = req.body;
        const AgServicio = {servicio, descripcion, precio};
        await database.query("INSERT INTO servicio set ?", [AgServicio]);
        res.status(200).json({ msg: "servicio agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarServicio = async (req,res) => {
    try {
        const { id } = req.params;
        const {servicio, descripcion, precio} = req.body;
        const editar = {servicio, descripcion, precio};
        const editarServi = await database.query("UPDATE servicio SET ? WHERE id = ?", [editar, id]);

        res.status(200).json({editarServi, msg: "servicio modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarServicio = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM servicio WHERE id = ?", [id]);
        res.status(200).json({ msg: "servicio eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}