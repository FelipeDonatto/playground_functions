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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distance1 = 0
let distance2 = 0
if(cat1>0 && cat2>0){
  distance1 = cat1 - mouse 
  distance2 = cat2 - mouse
}else if(cat1>0 && cat2<=0){
  distance1 = mouse - cat1 
  distance2 = cat2 - mouse
}else {
  distance1 = cat1 - mouse
  distance2 = mouse - cat2
}
console.log(distance1, distance2)
  if(distance1>distance2){
    return 'cat2'
  }else if(distance1===distance2){
    return 'os gatos trombam e o rato foge'
  }else{
    return 'cat1'
  }
  
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
