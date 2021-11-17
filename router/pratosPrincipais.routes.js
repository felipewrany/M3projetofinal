const express = require("express");
const router = express.Router();

const pratosPrincipais = require('./../models/pratosPrincipais');

router.get('/', (req,res) => {
    res.status(200).json({message:"rota pratos principais ok"});
});

router.post('/add', async (req,res) => {
    // validando as entradas do usuario
    if(!req.body.prato){
        res.status(400).json({message: "esta faltando o prato principal"});
        return;
    }if(!req.body.preco){
        res.status(400).json({message: "esta faltando o preço"});
        return;
    }
        
    await pratosPrincipais.create(req.body).then(() => {
        res.status(201).json({message: "cadastrado com sucesso"});
        
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })

});

router.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(400).json({message: "esta faltando id na URL"});
        return;
    }else if(!req.body.prato){
        res.status(400).json({message: "esta faltando o prato principal"});
        return;
    }else if(!req.body.preco){
        res.status(400).json({message: "esta faltando o preço"});
        return;
    }
   
    await pratosPrincipais.updateOne({ _id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
});


router.get('/listall', async (req,res) => {
    await pratosPrincipais.find({}).then((prato) => {
        console.log(prato);
        res.status(200).json(prato);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/listid/:id', async (req,res) => {
    const nome = req.params.nome; 
    await pratosPrincipais.findOne({ nome:nome }).then((prato) => { 
        console.log(prato);
        if(prato == null){ 
            res.status(404).json({message: "não foi encontrado"});
        }else{
            res.status(200).json(prato);
        }

    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });

})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
       
    await pratosPrincipais.findByIdAndDelete(id);
    
    res.send({ message: 'Prato principal excluído com sucesso' });
});



module.exports = router;