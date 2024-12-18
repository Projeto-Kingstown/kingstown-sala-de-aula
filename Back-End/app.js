const express = require("express");
const path = require('path')
const app = express();
const cors = require("cors");
const sequelize = require('./infraestrutura/sequelize');
const userRouter = require('./routes/userRouter');
const turmaRouter = require('./routes/turmaRouter')
const bodyParser = require('body-parser');

// Carregando os modelos antes de importar  
require('./models/arquivoModel')
require('./models/turmaAluno')
require('./models/turmaCamposModel')
require('./models/turmaModel')
require('./models/userModel')
require('./models/muralModel')

app.use(express.json());
app.use(cors());
app.use('', userRouter)
app.use('', turmaRouter)
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

sequelize.sync() 
  .then(() => {
    console.log('Tabelas sincronizadas');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar as tabelas:', err);
  });


app.listen(3000, (error) => {
    if (error) {
        console.log("Erro");
        return;
    }
    console.log("Subiu");
});