function fizzbuzz(numero){
    if (numero % 3 === 0 && numero % 5 === 0){
        return 'fizzbuzz';
    } else if (numero % 3 === 0){
        return 'fizz';
    } else if (numero % 5 === 0){
        return 'buzz';
    } else {
        return numero;
    }
}

for (let i = 1; i <= 20; i++) {
    const mensagem = fizzbuzz(i);
    console.log(mensagem);
  }

  module.exports = fizzbuzz