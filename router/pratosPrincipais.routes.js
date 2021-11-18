const express = require("express");
const router = express.Router();
const PratoPrincipalController = require('./../controllers/pratosPrincipais.controller');

router.get("/", PratoPrincipalController.index);

router.post("/add", PratoPrincipalController.postAdd);

router.put("/update/:id", PratoPrincipalController.putUpdate);

router.get("/listall", PratoPrincipalController.listAll);

router.get("/listid/:id", PratoPrincipalController.listId);

router.delete("/delete/:id", PratoPrincipalController.delDelete);

module.exports = router; 