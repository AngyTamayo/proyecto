const database = require('../database');
const express = require('express');

exports.ListarReservas = async (req,res) => {
    try{
        const servicio = await database.query("SELECT * FROM reserva")
        res.status(200).json({servicio});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.ListarReserva = async (req,res) => {
    try{ 
        const{id} = req.params;
        const Lisreserva = await database.query("SELECT * FROM reserva WHERE id = ?", [id])
        res.status(200).json({Lisreserva});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.AgregarReserva = async (req,res) => {
    try {
        const {servicio, fecha, nombre} = req.body;
        const AgReserva = {servicio, fecha, nombre};
        await database.query("INSERT INTO reserva set ?", [AgReserva]);
        res.status(200).json({ msg: "reserva agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarReserva = async (req,res) => {
    try {
        const { id } = req.params;
        const {servicio, fecha, nombre} = req.body;
        const editar = {servicio, fecha, nombre};
        const editarReser = await database.query("UPDATE reserva SET ? WHERE id = ?", [editar, id]);

        res.status(200).json({editarReser, msg: "reserva modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarReserva = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM reserva WHERE id = ?", [id]);
        res.status(200).json({ msg: "reserva eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}