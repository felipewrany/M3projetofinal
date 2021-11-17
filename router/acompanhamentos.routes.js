const express = require("express");
const router = express.Router();

const Acompanhamentos = require('./../models/acompanhamentos');

router.get('/', (req,res) => {
    res.status(200).json({message:"rota acompanhamentos ok"});
});

router.post('/add', async (req,res) => {
    // validando as entradas do usuario
    if(!req.body.acompanhamento){
        res.status(400).json({message: "esta faltando o acompanhamento"});
        return;
    }if(!req.body.preco){
        res.status(400).json({message: "esta faltando o preço"});
        return;
    }
        
    await Acompanhamentos.create(req.body).then(() => {
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
    }else if(!req.body.acompanhamento){
        res.status(400).json({message: "esta faltando o acompanhamento"});
        return;
    }else if(!req.body.preco){
        res.status(400).json({message: "esta faltando o preço"});
        return;
    }
   
    await Acompanhamentos.updateOne({ _id:id},req.body).then(() => { //updateOne atualiza o primeiro que encontrar e der match
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "algo esta errado"});
    });
});


router.get('/listall', async (req,res) => {
    await Acompanhamentos.find({}).then((acompanhamento) => {
        console.log(acompanhamento);
        res.status(200).json(acompanhamento);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/listid/:id', async (req,res) => {
    const nome = req.params.nome; 
    await Acompanhamentos.findOne({ nome:nome }).then((acompanhamento) => { 
        console.log(acompanhamento);
        if(acompanhamento == null){ 
            res.status(404).json({message: "não foi encontrado"});
        }else{
            res.status(200).json(acompanhamento);
        }

    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });

})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
       
    await Acompanhamentos.findByIdAndDelete(id);
    
    res.send({ message: 'Acompanhamento excluída com sucesso' });
});



module.exports = router;