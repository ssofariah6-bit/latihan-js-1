/*Pengkondisian bersarang (di dalam looping ada looping lagi).
for untuk variable i mendefinisikan baris, sedangkan j mendefinisikan kolom (banyaknya pengulangan dalam satu baris).
Hasil yang akan keluar adalah * sebanyak 5 baris, dalam tiap barisnya ada 5 * (bintang). */
var s ="";
for(var i=0; i<5;i++){
    for(var j=0; j<5; j++){
        s += "*";
    }
    s += "\n";
}
console.log(s);

/*Hasil yang keluar adalah 5 baris * (bintang) dengan tiap barisnya jumlah * (bintang) akan bertambah satu.*/
var s ="";
for(var i=1; i<5;i++){
    for(var j=1; j<=i; j++){
       s += '*';
    }
    s += "\n";
}
console.log(s);

/*Hasil yang keluar adalah 4 baris *(bintang) berjumlah 4, dengan tiap barisnya jumlah bintang akan berkurang*/
/*Baris hasil looping ini akan tidak berjarak dengan looping diatas, sehingga baris bintang akan membentuk panah*/
for(var i=4; i>=1; i--){
    for(var j=1; j<=i; j++){
        s= s+'*';
    }
    s += "\n";
}
console.log(s)



