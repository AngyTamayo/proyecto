const database = require('../database');
const express = require('express');

exports.ListarEmpleados = async (req,res) => {
    try{
        const empleado = await database.query("SELECT * FROM empleado")
        res.status(200).json({empleado});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.ListarEmpleado = async (req,res) => {
    try{ 
        const{id} = req.params;
        const Lisemple= await database.query("SELECT * FROM empleado WHERE id = ?", [id])
        res.status(200).json({Lisemple});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.AgregarEmpleado = async (req,res) => {
    try {
        const {nombre,edad,cedula,cargo} = req.body;
        const AgEmple = {nombre,edad,cedula,cargo};
        await database.query("INSERT INTO empleado set ?", [AgEmple]);
        res.status(200).json({ msg: "Empleado agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarEmpleado = async (req,res) => {
    try {
        const { id } = req.params;
        const {nombre,edad,cedula,cargo} = req.body;
        const editar = {nombre,edad,cedula,cargo};
        const editarEmple= await database.query("UPDATE empleado SET ? WHERE id = ?", [editar, id]);

        res.status(200).json({editarEmple, msg: "Empleado modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarEmpleado = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM empleado WHERE id = ?", [id]);
        res.status(200).json({ msg: "Empleado eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}