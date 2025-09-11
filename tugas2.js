var s ="";
for(var i=1; i<=5;i++){
   for(var j=1; j<=i; j++){
        s += "*";
   }
    s += "\n";
}

for(var i=4; i>=1; i--){
    for(var j=1; j<=i; j++){
        s+= "*";
    }
    s += "\n";
}
console.log(s)
