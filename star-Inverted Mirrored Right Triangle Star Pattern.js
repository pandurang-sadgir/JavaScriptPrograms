/*
Star-Inverted Mirrored Right Triangle star pattern.

********
 *******
  ******
   *****
    ****
     ***
      **
       *

*/
let star = "";
for(let i=1; i<=8; i++){//for new rows
    for(let k=2;k<=i;k++){
        star=star+" ";
    }
    for(let j=8; j>=i;j--){
        star=star+"*";
    }
    star=star+"\n";

}

console.log(star);