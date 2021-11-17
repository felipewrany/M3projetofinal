const express = require("express");
const router = express.Router();
const BebidaController = require('./../controllers/bebidas.controller');

router.get("/", BebidaController.index);

router.post("/add", BebidaController.postAdd);

router.put("/update/:id", BebidaController.putUpdate);

router.get("/listall", BebidaController.listAll);

router.get("/listid/:id", BebidaController.listId);

router.delete("/delete/:id", BebidaController.delDelete);

module.exports = router;