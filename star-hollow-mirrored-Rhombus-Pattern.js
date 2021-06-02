/*
Star-Hollow-Mirrored-Rhombus -Pattern

******
 *    *
  *    *
   *    *
    *    *
     ******

*/
let star = "";
for(let i=1;i<=6;i++){//for rows
    for(let k=2; k<=i; k++ ){ //for spaces
        star=star+" ";
    }
    for(let j=1;j<=6;j++){//for stars
        if(i==1|i==6|j==1|j==6){
            star=star+"*";
        }else{
            star=star+" ";

        }


    }
    star=star+"\n"
}
console.log(star);