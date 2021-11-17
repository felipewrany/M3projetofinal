const express = require("express");
const router = express.Router();
const SobremesaController = require('./../controllers/sobremesas.controller');

router.get("/", SobremesaController.index);

router.post("/add", SobremesaController.postAdd);

router.put("/update/:id", SobremesaController.putUpdate);

router.get("/listall", SobremesaController.listAll);

router.get("/listid/:id", SobremesaController.listId);

router.delete("/delete/:id", SobremesaController.delDelete);

module.exports = router;