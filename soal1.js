console.log('soal1---- \n');
function drawThreeColsBox(height){
    var pola = [1,2,3] ;
    for(var i = 0; i < height; i++){
      if(i == 0){
      var baris = String(pola[0]) +' ' + String(pola[1]) + ' ' +  String(pola[2]);
      } else {
      pola[0] = pola[0] + 3;
      pola[1] = pola[1] + 3;
      pola[2] = pola[2] + 3;
      var baris = String(pola[0]) +' ' + String(pola[1]) + ' ' +  String(pola[2]);
      }
      console.log(baris);
    }
  }
  drawThreeColsBox(2);
