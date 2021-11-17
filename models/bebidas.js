const mongoose = require("mongoose");

const bebidaModel = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, required: true }
  });
  
  const Bebida = mongoose.model("Bebidas", bebidaModel);
  
  module.exports = Bebida;