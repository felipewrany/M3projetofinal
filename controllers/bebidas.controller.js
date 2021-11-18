const Bebida = require("./../models/bebidas"); 

exports.index = (req, res) => {
    res.status(200).json({ message: "Rota Bebidas funcionando" });
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
    await Bebida.create(req.body).then( () => {
        res.status(201).json({message: "Bebida adicionada!"})
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
    await Bebida.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Bebida atualizada"})
    }).catch((err) => {
        res.status(400).json({message: "Ocorreu um erro!"});
        console.error(err);
    });
}

exports.listAll = async (req,res) => {
    await Bebida.find({}).then((bebidas) => {
        res.status(200).json(bebidas);
    }).catch((err) => {
        res.status(404).json({message: "Não há bebidas na lista!"});
        console.error(err);
    });
}

exports.listId = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Bebida.findById(req.params.id).then((bebidas) => {
        res.status(200).json(bebidas);
    }).catch((err) => {
        res.status(404).json({message: "A bebida não foi encontrada!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Bebida.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "A bebida foi deletada!"});
    }).catch((err) => {
        res.status(404).json({message: "A bebida não foi encontrada!"});
        console.error(err);
    });
}