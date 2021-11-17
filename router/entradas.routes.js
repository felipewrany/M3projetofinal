const express = require("express");
const router = express.Router();
const EntradaController = require('./../controllers/entradas.controller');

router.get("/", EntradaController.index);

router.post("/add", EntradaController.postAdd);

router.put("/update/:id", EntradaController.putUpdate);

router.get("/listall", EntradaController.listAll);

router.get("/listid/:id", EntradaController.listId);

router.delete("/delete/:id", EntradaController.delDelete);

module.exports = router;