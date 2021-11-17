const express = require("express");
const app = express();
require("dotenv").config();

const Connected = require("./models/conn/index");
app.use(express.json());

Connected();

app.get("/", (req, res) => { //Rota geral
  res.status(200).json({ message: "Rota geral do projeto funcionando" });
});

const routerEntradas = require("./router/entradas.routes");
app.use("/entradas", routerEntradas);

const routerBebidas = require("./router/bebidas.routes");
app.use("/bebidas", routerBebidas);

const routerPratosPrincipais = require("./router/pratosPrincipais.routes");
app.use("/pratosPrincipais", routerPratosPrincipais);

const routerAcompanhamentos = require("./router/acompanhamentos.routes");
app.use("/acompanhamentos", routerAcompanhamentos);

const routerSobremesas = require("./router/sobremesas.routes");
app.use("/sobremesas", routerSobremesas);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});