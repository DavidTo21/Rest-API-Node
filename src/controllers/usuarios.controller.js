import {getConnection, sql, querys} from '../database'

export const getUsuarios = async (req, res) => { 
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getAllUsuarios);
      res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.sender(error.message);
    }
};

export const createUsuario = async (req, res) => {
    const {
      Nombre,
      Apaterno,
      Amaterno,
      IDPerfil,
      Alias,
      Contraseña,
      IDEstatus,
      ControlRespMov,
      ControlFecha,
    } = req.body;
    console.log(
      Nombre,
      Apaterno,
      Amaterno,
      IDPerfil,
      Alias,
      Contraseña,
      IDEstatus,
      ControlRespMov,
      ControlFecha
    );
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("Nombre", sql.VarChar, Nombre)
        .input("Apaterno", sql.VarChar, Apaterno)
        .input("Amaterno", sql.VarChar, Amaterno)
        .input("IDPerfil", sql.Int, IDPerfil)
        .input("Alias", sql.VarChar, Alias)
        .input("Contraseña", sql.VarChar, Contraseña)
        .input("IDEstatus", sql.Int, IDEstatus)
        .input("AltaUnidades", sql.VarChar, "")
        .input("ProyectosAsignados", sql.VarChar, "")
        .input("FacturacionIndependiente", sql.Bit, 0)
        .input("ControlRespMov", sql.Int, ControlRespMov)
        .input("ControlFecha", sql.VarChar, ControlFecha)
        .query(querys.createUsuario);
      res.json("Nuevo usuario");
    } catch (error) {
      res.status(500);
      res.sender(error.message);
    }
};

export const getUsuarioById = async (req, res) => {
  const {id} = req.params
  try {
    const pool = await  getConnection();
    const result = await pool
    .request()
    .input('ID', id)
    .query(querys.getUsuarioById);
    console.log(result)
    res.send(result.recordset[0])
  } catch (error) {
    res.status(500);
      res.send(error.message);
  }
};

export const DeleteUsuarioById = async (req, res) => {
  const {id} = req.params
  try {
    const pool = await  getConnection();
    const result = await pool
    .request()
    .input('ID', id)
    .query(querys.deleteUsuario);

    res.sendStatus(204);
  } catch (error) {
    res.status(500);
      res.send(error.message);
  }
};

export const getTotalUsuarios = async (req, res) => {
  try {
    const pool = await  getConnection();
    const result = await pool
    .request()
    .query(querys.getTotalUsuarios);

    res.json(result.recordset[0]['']);
  } catch (error) {
    res.status(500);
      res.send(error.message);
  }
};

export const updateUsuarios = async (req, res) => {
  const {
    Nombre,
    Apaterno,
    Amaterno,
    IDPerfil,
    Alias,
    Contraseña,
    IDEstatus,
    ControlRespMov,
    ControlFecha,
  } = req.body;
  const {
    id
  } = req.params;

  const pool = await getConnection();
  await pool
  .request()
  .input("Nombre", sql.VarChar, Nombre)
        .input("Apaterno", sql.VarChar, Apaterno)
        .input("Amaterno", sql.VarChar, Amaterno)
        .input("IDPerfil", sql.Int, IDPerfil)
        .input("Alias", sql.VarChar, Alias)
        .input("Contraseña", sql.VarChar, Contraseña)
        .input("IDEstatus", sql.Int, IDEstatus)
        .input("AltaUnidades", sql.VarChar, "")
        .input("ProyectosAsignados", sql.VarChar, "")
        .input("FacturacionIndependiente", sql.Bit, 0)
        .input("ControlRespMov", sql.Int, ControlRespMov)
        .input("ControlFecha", sql.VarChar, ControlFecha)
        .input("ID", sql.Int, id)
        .query(querys.updateUsuario);

        res.json("Usuario actualizado correctamente");
};