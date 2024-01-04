import express from 'express'
import config from './config'
import usuariosRoutes from './routes/usuarios.routes'

const app = express()
//settings
app.set('port', config.port)

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(usuariosRoutes)

export default app