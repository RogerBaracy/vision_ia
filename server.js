// Arquivo de configuração para iniciar o projeto no Heroko
import express from 'express'
import serveStatic from 'serve-static'
import path from 'path'
const port = process.env.PORT || 5000

const app = express()

app.use(history())
app.use('/', serveStatic(path.join(__dirname, 'dist/spa')))
app.listen(port)
