// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(string) {
 return string.split(' ')
}

// Desafio 4
function concatName(array) {
  return array[array.length-1]+', '+ array[0]
 
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3)+ties
}

// Desafio 6
function highestCount(arr) {
 let max = arr[0]
 let times = 0
 for(let i = 0; i<arr.length; i++){
   if(arr[i]>max){
     max = arr[i]
   }
  }
  
  for(let y = 0; y<arr.length;y++){
    if (max === arr[y]){
      times = times + 1
    }
  }
  
return times
}
highestCount([-2, -2, -1])
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
