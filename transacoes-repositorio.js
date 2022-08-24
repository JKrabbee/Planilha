const transacoes = {
    transacoes:[
      {
        valor: 10,
        descricao: 'Pastel'
      },
      {
        valor: 4,
        descricao: 'Pacote de Figurinha'
      }
    ]
  }


class transacoesRepositorio {
    listarTransacoes(){
        return transacoes
    }

    criarTransacao(transacao){
        const lista = transacoes.transacoes
        lista.push(transacao)
    }
}

module.exports = transacoesRepositorio 