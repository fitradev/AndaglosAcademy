function digitsGrouper(numbers) {
  // only code here.
  var n=numbers.length;
  var g=[];
  var h;

  for(var i=0;i<=3;i++){
    g.push([]);
  }
  for(var i=0; i< n; i++){
    if(numbers[i].toString().length === 1){
      g[0].push(numbers[i]);
    } else if(numbers[i].toString().length === 2){
      g[1].push(numbers[i]);
    } else if(numbers[i].toString().length === 3){
      g[2].push(numbers[i]);
    } else if(numbers[i].toString().length === 4){
      g[3].push(numbers[i]);
    }
  }

  return g;

}

console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]
