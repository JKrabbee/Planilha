const transacoes = {
    saldo: 0,
    transacoes:[]
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