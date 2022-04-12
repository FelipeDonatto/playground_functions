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
function fizzBuzz(ar) {
  let fb = [];
  for(let index=0;index<ar.length;index++){
    if(ar[index]%3===0 &&ar[index]%5===0){
      fb.push('fizzBuzz')
    }else if(ar[index]%3===0){
      fb.push( 'fizz')
    }else if(ar[index]%5===0){
      fb.push( 'buzz')
    }else{
      fb.push( 'bug!')
    }
  }
  return fb
}

// Desafio 9
function encode(str) {
  let phrase = ''
  for(i = 0; i<str.length; i++){
    if(str[i]==='a'){
      phrase = phrase + 1
    }else if(str[i]==='e'){
      phrase = phrase + 2
    }else if(str[i]==='i'){ 
      phrase = phrase + 3
    }else if(str[i]==='o'){
      phrase = phrase + 4
    }else if(str[i]==='u'){
      phrase = phrase + 5
    }else{
      phrase = phrase + str[i]
    }
  }
return phrase
}
function decode(str) {
  let phrase = ''
  for(i = 0; i<str.length; i++){
    if(str[i]=== '1'){
      phrase = phrase + 'a'
    }else if(str[i]=== '2'){
      phrase = phrase + 'e'
    }else if(str[i]=== '3'){ 
      phrase = phrase + 'i'
    }else if(str[i]=== '4'){
      phrase = phrase + 'o'
    }else if(str[i]=== '5'){
      phrase = phrase + 'u'
    }else{
      phrase = phrase + str[i]
    }
  }
return phrase
}

// Desafio 10
function techList(ar, name) {
if(ar.length===0){
  return "Vazio!"
}else{
  let list = [];
  let sortedList = ar;
  sortedList.sort();
  for(let i = 0; i<sortedList.length; i++){
    list.push({
      'tech': sortedList[i],
      'name': name
    })
  }
  return list
}

}

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')
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
