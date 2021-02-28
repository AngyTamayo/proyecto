const database = require('../database');
const express = require('express');

exports.ListarComidas = async (req,res) => {
    try{
        const pqr = await database.query("SELECT * FROM comidas")
        res.status(200).json({pqr});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.ListarComida = async (req,res) => {
    try{ 
        const{id} = req.params;
        const Liscomidas = await database.query("SELECT * FROM comidas WHERE id = ?", [id])
        res.status(200).json({Liscomidas});
    } catch (err) {
        res.status(401).json({err : err});
    }
}

exports.AgregarComida = async (req,res) => {
    try {
        const {comida,bebida} = req.body;
        const AgComida = {comida,bebida};
        await database.query("INSERT INTO comidas set ?", [AgComida]);
        res.status(200).json({ msg: "comidaagregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarComida = async (req,res) => {
    try {
        const { id } = req.params;
        const {comida,bebida} = req.body;
        const editar = {comida,bebida};
        const editarComida= await database.query("UPDATE comidas SET ? WHERE id = ?", [editar, id]);

        res.status(200).json({editarComida, msg: "comida modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarComida = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM comidas WHERE id = ?", [id]);
        res.status(200).json({ msg: "comidas eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}