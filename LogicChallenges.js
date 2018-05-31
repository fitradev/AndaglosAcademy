console.log('Logic Challenge - Bandingkan Angka');
function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
   if (angka1<angka2){
    return  true;
  }else if (angka1>angka2){
   return false;
  }else{
   return '-1';
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

console.log('\n\n------------------------------');
console.log('Logic Challenge - Balik Kata');
function balikKata(kata) {
  // you can only write your code here!
return kata.split('').reverse().join('');
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

console.log('\n\n------------------------------');
console.log('Logic Challenge - X dan O');
function xo(str) {
  // you can only write your code here!
   var countx = 0;
   var counto = 0;
 var   posx = str.indexOf('x');
 var   poso = str.indexOf('o');

  while (posx !== -1) {
  countx++;
  posx = str.indexOf('x', posx + 1);
}
while (poso !== -1) {
  counto++;
  poso = str.indexOf('o', poso + 1);
}

if (countx === counto){
  return true;
}else{
  return false;
}
}


// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
