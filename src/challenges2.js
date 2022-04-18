// Desafio 11
function generatePhoneNumber(ar) {
  if(ar.length !== 11){
    return 'Array com tamanho incorreto.'
  }
  for(i = 0; i<ar.length; i++){
    let numberToCount = ar[i]
    let count = 0
    if(numberToCount < 0 || numberToCount > 9){
      return 'não é possível gerar um número de telefone com esses valores'
    }
    for(let j = 0; j<=ar.length;j++){
      if(numberToCount === ar[j])
      count ++
        if(count>= 3){
          return 'não é possível gerar um número de telefone com esses valores'
        }
          
    }
  }
  return '('+ar[0]+ar[1]+')'+' '+ar[2]+ar[3]+ar[4]+ar[5]+ar[6]+'-'+ar[7]+ar[8]+ar[9]+ar[10]
}

// demorei muito mais do que deveria nisso (tudo culpa do if dentro do for interno :c ) mas consegui, Deus é pai


console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
