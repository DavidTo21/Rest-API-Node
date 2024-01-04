import {Router} from 'express';
import {getUsuarios,createUsuario,getUsuarioById, DeleteUsuarioById, getTotalUsuarios, updateUsuarios} from '../controllers/usuarios.controller'

const router = Router()

router.get("/usuarios", getUsuarios);

//Guardar un usuario
router.post("/usuarios", createUsuario);

//Contar registros
router.get("/usuarios/count", getTotalUsuarios);

//Consultar usuario por ID
router.get("/usuarios/:id", getUsuarioById);

//Eliminar usuario
router.delete("/usuarios/:id", DeleteUsuarioById);

//Actualizar Usuario
router.put("/usuarios/:id",updateUsuarios)

export default router