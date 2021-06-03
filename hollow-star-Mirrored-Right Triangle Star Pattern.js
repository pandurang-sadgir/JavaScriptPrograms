/*

Hollow-star-Mirrored-Right Triangle Star Pattern
      *
     **
    * *
   *  *
  *   *
 *    *
*******

*/
let star ="";
for(let i=1; i<=7; i++){//for rows
    for(let k=6; k>=i; k--){ //for spaces
        star = star+" ";
    }
    for(let j=1;j<=i;j++){
        if(i==1|j==1|j==i|i==7){
            star=star+"*";

        }else{
            star=star+" ";

        }
    }

    star=star+"\n";

}
console.log(star);
