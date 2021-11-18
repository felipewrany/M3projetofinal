const mongoose = require("mongoose");

const acompanhamentoModel = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, required: true }
  });
  
  const Acompanhamento = mongoose.model("Acompanhamento", acompanhamentoModel);
  
  module.exports = Acompanhamento;