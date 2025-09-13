/*Hasil yang keluar adalah 5 baris * (bintang) dengan tiap barisnya jumlah * (bintang) akan bertambah satu.*/

var s ="";
for(var i=1; i<5;i++){
    for(var j=1; j<=i; j++){
       s += '*';
    }
    s += "\n";
}
console.log(s);
