const Principal = require("./../models/pratosPrincipais"); 

exports.index = (req, res) => {
    res.status(200).json({ message: "Rota Pratos Principais funcionando" });
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
    await Principal.create(req.body).then( () => {
        res.status(201).json({message: "Prato Principal adicionado!"})
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
    await Principal.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Prato Principal atualizado"})
    }).catch((err) => {
        res.status(400).json({message: "Ocorreu um erro!"});
        console.error(err);
    });
}

exports.listAll = async (req,res) => {
    await Principal.find({}).then((pratoPrincipal) => {
        res.status(200).json(pratoPrincipal);
    }).catch((err) => {
        res.status(404).json({message: "Não há prato principal na lista!"});
        console.error(err);
    });
}

exports.listId = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Principal.findById(req.params.id).then((pratoPrincipal) => {
        res.status(200).json(pratoPrincipal);
    }).catch((err) => {
        res.status(404).json({message: "o prato principal não foi encontrado!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Principal.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "O prato principal foi deletado!"});
    }).catch((err) => {
        res.status(404).json({message: "o prato principal não foi encontrado!"});
        console.error(err);
    });
}