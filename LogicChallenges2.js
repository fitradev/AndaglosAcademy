console.log('---Logic Challenge - Palindrome-------');

function palindrome(kata) {
// you can only write your code here!
 let y=kata.split('').reverse().join('');
 let k=kata;
 if(y===kata){
   return true;
 }else{
   return false;
 }
}
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

console.log('\n\n---Logic Challenge - Number Palindrome-------');
function angkaPalindrome(num) {
// you can only write your code here!

var temp=num+1;
    while(true)
    {
        var str_temp=temp.toString();
        //console.log(str_temp);
        var rev_temp=temp.toString().split("").reverse().join("");
        //console.log(rev_temp);
        if(str_temp==rev_temp)
        {
            return temp;
        }
        temp++;
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

console.log('\n\n---Logic Challenge - Menghitung Jumlah Kata-------');
function hitungJumlahKata(kalimat) {
// you can only write your code here!

	 kalimat = kalimat.replace(/(^\s*)|(\s*$)/gi,"");//?
	kalimat = kalimat.replace(/[ ]{2,}/gi," ");//?
kalimat = kalimat.replace(/\n /,"\n");//ini menghilangkan paragraf
	return kalimat.split(' ').length;

}
// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


console.log('\n\n---Logic Challenge - Pasangan Angka Terbesar-------');
function pasanganTerbesar(num) {
// you can only write your code here!

let str = String(num);
let a;
let b = 0;
  for (var i = 0; i < str.length; i++){
    a = Number(str[i] + str[i+1]);
    if (a > b){
      b = a;
    }
  }
  return b;
    }

      // return Math.max(f+g);

//}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
