"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usuarios = require("../controllers/usuarios.controller");
var router = (0, _express.Router)();
router.get("/usuarios", _usuarios.getUsuarios);

//Guardar un usuario
router.post("/usuarios", _usuarios.createUsuario);

//Contar registros
router.get("/usuarios/count", _usuarios.getTotalUsuarios);

//Consultar usuario por ID
router.get("/usuarios/:id", _usuarios.getUsuarioById);

//Eliminar usuario
router["delete"]("/usuarios/:id", _usuarios.DeleteUsuarioById);

//Actualizar Usuario
router.put("/usuarios/:id", _usuarios.updateUsuarios);
var _default = exports["default"] = router;