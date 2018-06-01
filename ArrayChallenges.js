console.log('----Melakukan Looping Data Array----');
let input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung","21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "06/04/1970", "Berkebun"]
            ]

function dataHandling(hasil){
for(let i=0;i<input.length;i++){
        console.log( 'Nomor ID : '+hasil[i][0]+
        '\nNama Lengkap :'+hasil[i][1]+
        '\nTTL : '+hasil[i][2]+','+hasil[i][3]+
        '\nHobi : '+hasil[i][4]);
}
}
  dataHandling(input);
// console.log(tampil);




console.log('\n\n----Menggunakan Built Function Pada Array----');

function dataHandling2(hasil){
// for(i=0;i<input.length;i++){
//   hasil.splice(hasil[i],0,"pria","tes");
//   console.log(hasil);
// }

for(let i=0;i<input.length;i++){
  let l=hasil[i][3];
  //console.log(l);

   let y=l.split('');
   let k=l.split('').reverse().join('');
  let b=y[3]+l[4];


  //console.log(b);
  //break;
  switch(b){
  case '01' :
  console.log(`Januari`);
  console.log(k);
  break;
  case '02':
  console.log(`Februari`);
  console.log(k);
  break;
  case '03':
  console.log(`Maret`);
  console.log(k);
  break;
  case '04':
  console.log(`April`);
  console.log(k);
  break;
  case '05':
  console.log(`Mei`);
  console.log(k);
  break;
  case '06':
  console.log(`Juni`);
  console.log(k);
  break;
  case '07':
  console.log(`Juli`);
  console.log(k);
  break;
  case '08':
  console.log(`Agustus`);
  console.log(k);
  break;
  case '09':
  console.log(`September`);
  console.log(k);
  break;
  case '10':
  console.log(`Oktober`);
  console.log(k);
  break;
  case '11':
  console.log(`November`);
  console.log(k);
  break;
  case '12':
  console.log(`Desember`);
  console.log(k);
  break;

  default :
  console.log(`data yang dimasukan salah`);
  break;


}

}

}


dataHandling2(input);
// console.log(tampil);
