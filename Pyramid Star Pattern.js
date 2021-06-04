/*
Pyramid Star Pattern

         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*/
let star = "";
for(let i=1;i<=9;i++){

    for(let k=1;k<=9-i+1;k++){//for spaces
        star=star+" ";
    }
    for(let j=1; j<=i*2-1;j++){
        star = star + "*";
    }
    star=star+"\n";

}
console.log(star);