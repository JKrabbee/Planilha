const file = require('fs');

file.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const content = []

  for (let index = 1; index < data; index++) {
    if(index % 3 === 0 && index % 5 === 0){
        content.push('FizzBuzz')
    }else if (index % 3 === 0){
        content.push('Fizz')
    }else if (index % 5 === 0){
        content.push('Buzz')
    }else{
        content.push(index)
    }
  }

  file.writeFile('output.txt', content, err => {
    if (err) {
      console.error(err);
    }
  });
});





