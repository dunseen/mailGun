import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import routes from './routes/send.routes'
import handlebars from 'express-handlebars'

const app = express()

// Permite acesso externo
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(cors())
app.use(express.json()) // Desativa o X-Powered-By: Express
app.disable('x-powered-by')
app.use(routes)

// Passamos a porta onde o servidor ficará ouvindo
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port: ${process.env.PORT}`)
})
