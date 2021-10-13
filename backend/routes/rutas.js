import express from 'express';
const router = express.Router();

import Articulos from '../models/articulos';
import Usuarios from '../models/usuarios';

/*Crear un nuevo producto*/

router.post('/nuevo-articulo', async(req, res) => {

    const body = req.body;

    try {
        const articulosDB = await Articulos.create(body);
        res.status(200).json(articulosDB);
    } catch (error) {
        return res.status(500).json({
        mensaje: 'Ocurrió un error',
        error
        })
    }
});

/*Listar productos*/
router.get('/listar-articulos', async(req, res) => {
    try {
    const articulosDB = await Articulos.find();
    res.json(articulosDB);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrió un error',
        error
        })
    }
});   

/*Buscar producto por ID*/
router.get('/buscar-articulo/:id', async(req, res) => {

    const _id = req.params.id;

    try {
        const articulosDB = await Articulos.findOne({_id});
        res.json(articulosDB)
        
    }catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrió un error',
            error
        })
        
    } 
});   
/*Editar productos*/
router.put('/editar-articulo/:id',async(req,res)=>{
    
    const _id=req.params.id;
    const body =req.body;

    try {

        const articulosDB= await Articulos.findByIdAndUpdate(_id,body,{new:true});
        res.json(articulosDB);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrió un error',
            error
        })
        
    }
});

/*Eliminar productos*/
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

            mensaje:'Ocurrió un error',
            error
        })  
    }
});

/*Crear usuarios*/
router.post('/nuevo-usuario', async(req, res) => {

    const body = req.body;

    try {
        const usuariosDB = await Usuarios.create(body);
        res.status(200).json(usuariosDB);
    } catch (error) {
        return res.status(500).json({
        mensaje: 'Ocurrió un error',
        error
        })
    }
});

/*Listar usuarios*/
router.get('/listar-usuarios', async(req, res) => {
    try {
    const usuariosDB = await Usuarios.find();
    res.json(usuariosDB);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrió un error',
        error
        })
    }
}); 

/*Editar usuarios*/
router.put('/editar-usuario:id',async(req,res)=>{
    
    const _id=req.params.id;
    const body =req.body;

    try {

        const usuariosDB= await Usuarios.findByIdAndUpdate(_id,body,{new:true});
        res.json(usuariosDB);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrió un error',
            error
        })
        
    }
});

/*Eliminar productos*/
router.delete('/borrar-usuario/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const usuariosDB  =await Usuarios.findByIdAndDelete({_id});
        if(!usuariosDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado' 
            }) 
        } 
        res.json(usuariosDB);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrió un error',
            error
        })  
    }
});
module.exports = router;