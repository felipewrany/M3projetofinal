const mongoose = require("mongoose");

const principalModel = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, required: true }
  });
  
  const Principal = mongoose.model("Prato Principal", principalModel);
  
  module.exports = Principal;