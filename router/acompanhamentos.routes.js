const express = require("express");
const router = express.Router();
const AcompanhamentoController = require('./../controllers/acompanhamentos.controller');

router.get("/", AcompanhamentoController.index);

router.post("/add", AcompanhamentoController.postAdd);

router.put("/update/:id", AcompanhamentoController.putUpdate);

router.get("/listall", AcompanhamentoController.listAll);

router.get("/listid/:id", AcompanhamentoController.listId);

router.delete("/delete/:id", AcompanhamentoController.delDelete);

module.exports = router; 