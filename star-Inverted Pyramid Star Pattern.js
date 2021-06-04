/*

Star inverted pyramid pattern

 *************
  ***********
   *********
    *******
     *****
      ***
       *


 */
let star="";
let n=13;
for(let i=1;i<=7;i++){
    for(let k=1;k<=i;k++){//for spaces
        star=star+" ";

    }
    for(let j=1; j<=15-i*2 ; j++){//for printing star
        star=star+"*";

    }
    star=star+"\n";
}
console.log(star);