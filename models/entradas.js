const mongoose = require("mongoose");

const entradaModel = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, required: true }
  });
  
  const Entrada = mongoose.model("Entradas", entradaModel);
  
  module.exports = Entrada;