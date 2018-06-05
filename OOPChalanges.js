console.log('........Kalkulator.....\n\n');

class Kalkulator {
  constructor(angka1, angka2){
  this.hasil = 0;
  this.angka1 = 0;
  this.angka2 = 0
  }
  tambah(){
  return this.hasil = angka1 + angka2;
  }
  kurang(){
  return this.hasil = angka1 - angka2;
  }
  bagi(){
  return this.hasil= this.angka1 / this.angka2;
    }

  kali(){
  return this.hasil = angka1 * angka2;
  }
}

const angka1 = 2;
const angka2 = 3;
const kalkulator = new Kalkulator(angka1,angka2);

kalkulator.tambah()
console.log(kalkulator.hasil) // 5
kalkulator.kurang()
console.log(kalkulator.hasil) // -1
kalkulator.kali()
console.log(kalkulator.hasil) // 6
kalkulator.angka1 = 6
kalkulator.angka2 = 2
kalkulator.bagi()
console.log(kalkulator.hasil) // 3


console.log('.......inheritanc terhadap Class......\n\n');
class Handphone {
  constructor(merk, produk, kondisi ){
    this.merk = merk
    this.produk = produk
    this.kondisi = false
  }

  namaMerk(){
    return this.merk
  }
  namaProduk(){
    return this.produk
  }
  nyalakanHp(){
    return this.tipe= true
  }
  matikanHp(){
    return this.tipe= true
  }
}

class Standar extends Handphone {
  super(merk, produk){
    this.merk = merk
    this.produk = produk
    this.simple = false
  }

  tipePemakaian(){
    return this.simple=true
  }
}

class Smartphone extends Handphone {
  super(merk, produk){
    this.merk = merk
    this.produk = produk
    this.fitur =  false
  }

  fiturAplikasi(){
    return this.fitur=true
  }
}

const standar = new Standar('c3' , 'Nokia')
const smartphone = new Smartphone('Redmi note 3' , 'Xiomi')
console.log(standar.namaMerk(), standar.namaProduk())
console.log('Kelebihan ' +standar.tipePemakaian())
console.log('Nyalakan Hp ' +smartphone.nyalakanHp())
console.log('\n\n' + smartphone.namaMerk(), smartphone.namaProduk())
console.log('Banyak Fitur ' +smartphone.fiturAplikasi())
console.log('Nyalakan Hp ' +smartphone.nyalakanHp())
