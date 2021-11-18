const Entrada = require("./../models/entradas"); 

exports.index = (req, res) => {
    res.status(200).json({ message: "Rota Entradas funcionando" });
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
    await Entrada.create(req.body).then( () => {
        res.status(201).json({message: "Entrada adicionada!"})
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
    await Entrada.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Entrada atualizada"})
    }).catch((err) => {
        res.status(400).json({message: "Ocorreu um erro!"});
        console.error(err);
    });
}

exports.listAll = async (req,res) => {
    await Bebida.find({}).then((entradas) => {
        res.status(200).json(entradas);
    }).catch((err) => {
        res.status(404).json({message: "Não há entradas na lista!"});
        console.error(err);
    });
}

exports.listId = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Entrada.findById(req.params.id).then((entradas) => {
        res.status(200).json(entradas);
    }).catch((err) => {
        res.status(404).json({message: "A entrada não foi encontrada!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Entrada.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "A entrada foi deletada!"});
    }).catch((err) => {
        res.status(404).json({message: "A entrada não foi encontrada!"});
        console.error(err);
    });
}