import express from 'express';
const router = express.Router();

import Articulos from '../models/articulos';
import Usuarios from '../models/usuarios';

router.post('/nuevo-articulo', async(req, res) => {

    const body = req.body;

    try {
        const articulosDB = await Articulos.create(body);
        res.status(200).json(articulosDB);
    } catch (error) {
        return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
        })
    }
});

router.get('/listar-articulos', async(req, res) => {
    try {
    const articulosDB = await Articulos.find();
    res.json(articulosDB);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
        })
    }
});   

router.get('/buscar-articulo/:id', async(req, res) => {

    const codigo = req.params.id;

    try {
        const articulosDB = await Articulos.findOne({codigo});
        res.json(articulosDB)
        
    }catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    } 
});   


router.delete('/borrar-articulo/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const articulosDB  =await Articulos.findByIdAndDelete({_id});
        if(!articulosDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado' 
            }) 
        } 
        res.json(articulosDB);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })  
    }
});

router.get('/listar-usuarios', async(req, res) => {
    try {
    const usuariosDB = await Usuarios.find();
    res.json(usuariosDB);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
        })
    }
});   

module.exports = router;