const mongoose = require("mongoose");

const sobremesaModel = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, required: true }
  });
  
  const Sobremesa = mongoose.model("Sobremesas", sobremesaModel);
  
  module.exports = Sobremesa;