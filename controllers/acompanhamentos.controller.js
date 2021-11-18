const Acompanhamento = require("./../models/acompanhamentos"); 

exports.index = (req, res) => {
    res.status(200).json({ message: "Rota Acompanhamento funcionando" });
};

exports.postAdd = async (req,res) => {
    if(!req.body.nome){
        res.status(400).json({message: "O nome está vazio!"});
        return;
    }
    if(!req.body.valor){
        res.status(400).json({message: "O valor está vazio!"});
        return;
    }
    await Acompanhamento.create(req.body).then( () => {
        res.status(201).json({message: "Acompanhamento adicionado!"})
    }).catch((err) => {
        res.status(400).json({message: "Ocorreu um erro!"});
        console.error(err);
    });
}

exports.putUpdate = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    if(!req.body.nome){
        res.status(400).json({message: "O nome está vazio!"});
        return;
    }
    if(!req.body.valor){
        res.status(400).json({message: "O valor está vazio!"});
        return;
    }
    await Acompanhamento.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Acompanhamento atualizado"})
    }).catch((err) => {
        res.status(400).json({message: "Ocorreu um erro!"});
        console.error(err);
    });
}

exports.listAll = async (req,res) => {
    await Acompanhamento.find({}).then((acompanhamentos) => {
        res.status(200).json(acompanhamentos);
    }).catch((err) => {
        res.status(404).json({message: "Não há acompanhamentos na lista!"});
        console.error(err);
    });
}

exports.listId = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Acompanhamento.findById(req.params.id).then((acompanhamentos) => {
        res.status(200).json(acompanhamentos);
    }).catch((err) => {
        res.status(404).json({message: "O acompanhamento não foi encontrada!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Acompanhamento.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "O acompanhamento foi deletado!"});
    }).catch((err) => {
        res.status(404).json({message: "O acompanhamento não foi encontrado!"});
        console.error(err);
    });
}