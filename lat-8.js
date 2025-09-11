var s="";
for (var i=1; i<=6; i++){       /*i<=6 artinya bakal ada 6 baris*/
    var ganjil=1;
   for(var j=1; j<=i; j++){     /*j akan mengartikan banyak angka di satu baris*/
    s+=ganjil;
    ganjil+=2;
   }
   s+="\n";
}
for (var i=6; i>=1; i--){
    var genap=2;
   for(var j=1; j<=i; j++){
    s+=genap;
    genap+=2;
   }
   s+="\n";
}
console.log(s)