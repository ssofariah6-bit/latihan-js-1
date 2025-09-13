/*Looping bersarang menggunakan for.*/
/*Hasil menampilkan 6 baris angka ganjil, tiap barisnya jumlah angka ganjil akan bertingkat.
1\ 13\ 135\ 1357\ 13579\ 1357911 (6 baris)*/

var s="";
for (var i=1; i<=6; i++){       /*i<=6 artinya bakal ada 6 baris*/
    var ganjil=1;
   for(var j=1; j<=i; j++){     /*j akan mengartikan banyak angka di satu baris*/
    s+=ganjil;
    ganjil+=2;
   }
   s+="\n";
}

/*Hasil menampilkan 6 baris angka genap, tiap barisnya jumlah angka ganjil akan berkurang.
2468101112\ 246810\ 2468\ 246\24\ 2(6 baris)*/
for (var i=6; i>=1; i--){
    var genap=2;
   for(var j=1; j<=i; j++){
    s+=genap;
    genap+=2;
   }
   s+="\n";
}
console.log(s)