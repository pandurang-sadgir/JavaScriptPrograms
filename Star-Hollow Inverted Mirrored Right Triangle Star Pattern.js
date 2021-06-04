/*
Star-Hollow Inverted Mirrored Right Triangle Star Pattern
*******
 *    *
  *   *
   *  *
    * *
     **
      *

*/
let star="";
for(let i=1;i<=7;i++){
    for(let k=2;k<=i;k++){
        star=star+" ";
    }
    for(let j=1; j<=7; j++){//for stars
        if(i==1|j==1|j==7-i+1){// when condition is true then print *
            star=star+"*"
        }else{
            star=star+" ";

        }

    }
    star=star+"\n"

}
console.log(star);