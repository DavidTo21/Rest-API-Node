export const querys = {
    getAllUsuarios: 'SELECT * FROM Seg_Usuarios',
    createUsuario: 'INSERT INTO Seg_Usuarios (Nombre,Apaterno,Amaterno,IDPerfil,Alias,Contraseña,IDEstatus,AltaUnidades,ProyectosAsignados,FacturacionIndependiente,ControlRespMov,ControlFecha) VALUES (@Nombre,@Apaterno,@Amaterno,@IDPerfil,@Alias,@Contraseña,@IDEstatus,@AltaUnidades,@ProyectosAsignados,@FacturacionIndependiente,@ControlRespMov,@ControlFecha)',
    getUsuarioById: 'SELECT * FROM Seg_Usuarios WHERE ID = @ID',
    deleteUsuario: 'DELETE FROM Seg_Usuarios WHERE ID = @ID',
    getTotalUsuarios: 'SELECT COUNT(*) FROM Seg_Usuarios',
    updateUsuario: 'UPDATE Seg_Usuarios SET Nombre = @Nombre,Apaterno = @Apaterno,Amaterno = @Amaterno,IDPerfil = @IDPerfil,Alias = @Alias,Contraseña = @Contraseña,IDEstatus = @IDEstatus,AltaUnidades = @AltaUnidades,ProyectosAsignados = @ProyectosAsignados,FacturacionIndependiente = @FacturacionIndependiente,ControlRespMov = @ControlRespMov,ControlFecha = @ControlFecha WHERE ID = @ID'
}