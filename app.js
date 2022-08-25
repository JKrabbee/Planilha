const express = require('express');
const app = express();
const transacoesRepositorio = require('./transacoes-repositorio')


const port = 3000;

app.use(express.static(`${__dirname}/public`))
app.use(express.json());

app.get('/transacoes', (req, res) => {
  const repositorio = new transacoesRepositorio
  const transacoes = repositorio.listarTransacoes()

  transacoes.transacoes.forEach((transacao) => {
    if(transacao.categoria === 'Despesa'){
      transacoes.saldo = transacoes.saldo - transacao.valor
    }
    if(transacao.categoria === 'Receita'){
      transacoes.saldo = transacoes.saldo + transacao.valor
    }
  });
  console.log(transacoes)
  res.send(transacoes)
})

app.post('/transacoes', (req,res) => {
  const repositorio = new transacoesRepositorio
  const transacao = req.body
  repositorio.criarTransacao(transacao)
  res.status(201).send(transacao)
})

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});