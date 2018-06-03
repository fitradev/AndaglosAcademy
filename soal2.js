/*psuedocede
var input=[x, y, z, a, b];

proses
for (var i=0; i<input.length;i++)
  if
  (x + 0 + kanan dari x)
  (y + kiri dari y + kanan dari y)
  (z + kiri dari z + kanan dari z)
  (a + kiri dari a + kanan dari a)
  (b + kiri dari b + 0)

  var total
*/

var input=[2,5,1,3];
function numberCruncher(arrOfNum){
  var arr=[];

 for(let i = 0; i < arrOfNum.length; i++) {
    if(i !== 0 && i !== arrOfNum.length - 1) {
      arr.push(arrOfNum[i - 1] + arrOfNum[i] + arrOfNum[i+1]);

    }

    if(i === 0) {
      arr.push(0 + arrOfNum[i] + arrOfNum[i+1]);
    }

    if(i === arrOfNum.length - 1) {
      arr.push(arrOfNum[i - 1] + arrOfNum[i] + 0);
    }
  }
   //console.log(arr);
  var tot = 0;

  for(let j = 0; j < arr.length; j++) {
    if(arr[j] % 2 !== 0) {
      tot += arr[j];
    }

  }
  return tot;

}
console.log(numberCruncher(input));
