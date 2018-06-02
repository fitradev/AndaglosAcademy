console.log('---Change Me---- \n\n')

function changeMe(arr) {
  //var result = ""
  if (arr.length <1){
      console.log('data kosong')
  } else {
      for (let i = 0; i < arr.length; i++) {
          let o = {};
          let age = 2018 - arr[i][arr[i].length -1];
          o.firstName = arr[i][0];
          o.lastName = arr[i][1];
          o.gender = arr[i][2];
          if (!age || 2018 < arr[i][arr[i].length - 1]) {
              o.age = 'Invalid Birth Year';
          } else {
              o.age = age;
            }
        let hasil = (i+1) + "." + " " + arr[i][0] + " " + arr[i][1] + ":"
        console.log(hasil);
        console.log(o);
      }

  }
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""


 console.log('\n\n ---Shopping Time---- \n\n');
function shoppingTime(memberId, money) {
  // you can only write your code here!
   let sisa = money;
  let chart = [];

  for(let  i=0; i<5; i++){
    if(sisa >= 1500000){
      chart.push('Sepatu Stacattu');
      sisa -= 1500000;
    } else if(sisa >= 500000){
      chart.push('Baju Zoro');
      sisa -= 500000;
    } else if(sisa >= 250000){
      chart.push('Baju H&N');
      sisa -= 250000;
    } else if(sisa >= 175000){
      chart.push('Sweater Uniklooh');
      sisa -= 175000;
    } else if(sisa >= 50000){
      chart.push('CasingHandphone');
      sisa -= 50000;
      break;
    }
  }


  let objProduct = {};
  objProduct.memberId = memberId;
  objProduct.money = money;
  objProduct.listPurchased = chart;
  objProduct.changeMoney = sisa;
  // objProduct.

  if(memberId === '' || memberId === undefined && money === undefined){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if(money < 50000){
    return 'Mohon maaf, uang tidak cukup';
  }
  return objProduct;

}
  //return (memberId,money);

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk membersaja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log('\n\n ---Toko X---- \n\n');
function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  // you can only write your code here!
  if(shoppers.length<1){
    return shoppers
  }

  let simpannamaspatu=[];
  let simpannamabaju=[];
  let simpannamasweater=[];
  let totalbarang=0,profitspatu=0,profitbaju=0,profitsweater=0
    for(let j=0;j<shoppers.length;j++){
      if(shoppers[j]['product']==='Sepatu Stacattu'){
        if(listBarang[0][2]-shoppers[j]['amount']>=0){
          listBarang[0][2]= listBarang[0][2]-shoppers[j]['amount']
          profitspatu=profitspatu+(shoppers[j]['amount']*1500000)
          simpannamaspatu.push(shoppers[j].name)
        }
      }
      else if(shoppers[j]['product']==='Baju Zoro'){
        if(listBarang[1][2]-shoppers[j]['amount']>=0){
          listBarang[1][2]= listBarang[1][2]-shoppers[j]['amount']
          profitbaju=profitbaju+(shoppers[j]['amount']*500000)
          simpannamabaju.push(shoppers[j].name)
        }
      }
      else if(shoppers[j]['product']==='Sweater Uniklooh'){
        if(listBarang[2][2]-shoppers[j]['amount']>=0){
          listBarang[2][2]= listBarang[2][2]-shoppers[j]['amount']
          profitsweater=profitsweater+(shoppers[j]['amount']*175000)
          simpannamasweater.push(shoppers[j].name)
        }
      }
    }

    var tampilarray=[{
      product: 'Sepatu Stacattu',
      shoppers: simpannamaspatu,
      leftOver: listBarang[0][2],
      totalProfit: profitspatu
    },
    {
      product: 'Baju Zoro',
      shoppers: simpannamabaju,
      leftOver: listBarang[1][2],
      totalProfit: profitbaju
    },
    {
      product: 'Sweater Uniklooh',
      shoppers: simpannamasweater,
      leftOver: listBarang[2][2],
      totalProfit: profitsweater
    }]
    return tampilarray;
}


// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name:
'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh',
amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name:
'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh',
amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro',
amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
