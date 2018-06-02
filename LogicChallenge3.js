console.log('1-------Logic Challenge - Mencari Mean------ \n');
function cariMean(arr) {
  // you can only write your code here!
  let sum=0;
  for (let i = 0 ;i<arr.length;i++){
    sum= sum + arr[i];
    //console.log(arr[i]);

    //break;
  }

  return  Math.round(sum / arr.length);
}
// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

console.log('\n\n\ 2------Logic Challenge - Perkalian Unik------');
function perkalianUnik(arr) {
  // you can only write your code here!
   let ca=[];

  for(let a=0;a<arr.length;a++){
    let ar=1;
    for(var b=0;b<arr.length;b++){
      if(a !== b){
        ar *= arr[b];
      }
    }
    ca.push(ar);
  }
  return ca;

}
// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

console.log('\n\n 3------Logic Challenge - Tentukan Deret Aritmatika------ \n');
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
   let v = arr.slice(-1).pop() - arr.slice(-2, -1).pop();
  //console.log(v);

  for (let i = arr.length-1; i > 0; i--) {
    if (v !== (arr[i] - arr[i-1])) {
      return false;
    }
  }
  return true;
}
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false


console.log('\n\n 4------Logic Challenge - Tentukan Deret Geometri------');
function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  let v = arr.slice(-1).pop() / arr.slice(-2, -1).pop();
   for (let i = 0; i <= arr.length-2; i++) {
    if (v * arr[i] !== arr[i+1]) {
     return false;
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
