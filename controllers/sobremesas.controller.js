const Sobremesa = require("./../models/sobremesas"); 

exports.index = (req, res) => {
    res.status(200).json({ message: "Rota Sobremesas funcionando" });
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
    await Sobremesa.create(req.body).then( () => {
        res.status(201).json({message: "Sobremesa adicionada!"})
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
    await Sobremesa.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Sobremesa atualizada"})
    }).catch((err) => {
        res.status(400).json({message: "Ocorreu um erro!"});
        console.error(err);
    });
}

exports.listAll = async (req,res) => {
    await Sobremesa.find({}).then((sobremesas) => {
        res.status(200).json(sobremesas);
    }).catch((err) => {
        res.status(404).json({message: "Não há sobremesas na lista!"});
        console.error(err);
    });
}

exports.listId = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Sobremesa.findById(req.params.id).then((sobremesas) => {
        res.status(200).json(sobremesas);
    }).catch((err) => {
        res.status(404).json({message: "A sobremesa não foi encontrada!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "ID incorreta!"});
        return true;
    }
    await Sobremesa.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "A sobremesa foi deletada!"});
    }).catch((err) => {
        res.status(404).json({message: "A sobremesa não foi encontrada!"});
        console.error(err);
    });
}