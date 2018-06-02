console.log('\n\n ------ Logic Challenge - Target Terdekat----- \n');
function targetTerdekat(arr) {
  // you can only write your code here!
  let a = 0;
  let b = 0;
  let c = 0;
  let arrX = [];

  if(arr.indexOf('x') === - 1) {
    return 0;
  }
  else {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === 'x') {
        a = i;
        arrX.push(a);
      }
      else if(arr[i] === 'o') {
        b = i;
      }
      var output = [];
      for(let j = 0; j < arrX.length; j++) {
        c = Math.abs(b - arrX[j]);
        output.push(c);
        output.sort();
      }
    }
    return output[0];
  }
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


console.log('\n\n ------ Logic Challenge - Mengelompokkan Angka----- \n');
function mengelompokkanAngka(arr) {
  // you can only write your code here!
  let h=[];
  for(let i=0;i<3;i++){
    h.push([]);

  }
    for(let j=0;j<arr.length;j++){
      if(arr[j] %3===0){
        h[2].push(arr[j]);
        //console.log(hasil[2].push(arr[j]));
     } else if(arr[j]%2!==0){
        h[1].push(arr[j]);
      }
      else if(arr[j]%2===0){
        h[0].push(arr[j]);
      }
    }
    return h;

    }
// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]


console.log('\n\n ------ Logic Challenge - Mengelompokkan Hewan----- \n');
function groupAnimals(animals) {
  // you can only write your code here!
let s= animals.sort();
let g= animals[0][0];
let r=[];
//console.log(g);
let p=[];
//p.push([]);

//  for(let i=0;i<s.length;i++){
//     p.push([]);

//  //}
    for(let j=0;j<s.length;j++){
      if(s[j][0] === g){
        p.push(s[j]);
        //console.log(hasil[2].push(arr[j]));
     }
      else {
        r.push(p);
        p=[];
        g=s[j][0];
        p.push(s[j]);
      }
    }
    r.push(p);
     return r;
 }

  //   p[0].push(g[1].charAt(0));





// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'
