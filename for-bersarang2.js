/*Pengkondisian bersarang (di dalam looping ada looping lagi).
for untuk variable i mendefinisikan baris, sedangkan j mendefinisikan kolom (banyaknya pengulangan dalam satu baris).
Hasil yang akan keluar adalah 4 baris angka 1 sampai 5, di tiap baris akan bertambah 1 angka sesuai jumlah baris.
1\ 12\ 123\ 1234\ 12345 */

var s ='';
for(var i=1; i<=5;i++){
   for(var j=1; j<=i; j++){
        s = s + j;
   }
    s += "\n";
}
console.log(s)

/*Hasil yang keluar adalah 4 baris angka berjumlah 4, dengan tiap barisnya jumlah angka akan berkurang*/
/*1234\ 123\ 12\ 1*/
/*Baris hasil looping ini akan tidak berjarak dengan looping diatas, sehingga baris angka akan membentuk panah*/
for(var i=4; i>=1; i--){
    for(var j=1; j<=i; j++){
        s= s+j;
    }
    s += "\n";
}
console.log(s)