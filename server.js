const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000
const api = require('./routes/api')

app.use(cors())

app.use(bodyParser.json())
app.use('/api', api)

app.get('/', (req, res) => res.send({ "message": "Bem-vindo a API do Minha Rotina. Leia a doc para mais detalhes" }))

app.listen(port, () => console.log('Server app listening on port ' + port + '!'))