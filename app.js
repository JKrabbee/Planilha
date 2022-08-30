require('dotenv/config')
const express = require('express');
const app = express();
const transacoesRepositorio = require('./infra/sql-transacoes-repositorio')


const port = 3000;

app.use(express.static(`${__dirname}/public`))
app.use(express.json());

app.get('/transacoes', async (req, res) => {
  const repositorio = new transacoesRepositorio
  const transacoes = await repositorio.listarTransacoes()

  let saldo = 0;
  transacoes.transacoes.forEach((transacao) => {
    if (transacao.categoria === "Despesa") {
      saldo = saldo - transacao.valor;
    }
    if (transacao.categoria === "Receita") {
      saldo = saldo + transacao.valor;
    }
  });
  transacoes.saldo = saldo;
  res.send(transacoes);
})

app.post('/transacoes', async (req,res) => {
  const repositorio = new transacoesRepositorio
  const transacao = req.body
  await repositorio.criarTransacao(transacao)
  res.status(201).send(transacao)
})

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});