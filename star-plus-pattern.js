/*
Star-plus sign pattern

   +      
      +      
      +      
      +      
      +
      +
+++++++++++++
      +
      +
      +
      +
      +      
      +      


*/
let star="";
for(let i=1;i<=13;i++){//for new rows
    for(let j=1;j<=13;j++){//for printing star
        if (j==7|i==7) {
            star=star+"+";
        } else {
            star=star+" ";
        }

    }
    star=star+"\n";

}
console.log(star);
