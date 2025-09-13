/*Melakukan pengulangan (looping) 'for' yang didalamnya ada pengkondisian (if else).
Hasil yang keluar dari kode ini adalah nilai 0 sampai dengan 10 dengan keterangan antara 
'Baik Sekali', 'Baik' dan 'Mengecewakan'.*/

for(var nilai=0; nilai<=10; nilai++){
    if(nilai>=9){
    console.log(nilai+ " Baik Sekali");}

    else if(nilai>=6 && nilai <=8){
    console.log(nilai+" Baik");}

    else{
    console.log(nilai+" Mengecewakan");
}
}


