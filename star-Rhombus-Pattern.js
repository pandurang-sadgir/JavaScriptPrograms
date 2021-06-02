/*
Star rhombus pattern
      *******
     *******
    *******
   *******
  *******
 *******
*******


*/
let star = "";
let n = 7;
for(let i=1;i<=n;i++){//for rows
    for(let k=1;k<=6-i+1; k++){ //for spaces
        star= star+" ";

    }
    for(let j=1;j<=n;j++){
        star=star+"*";
    }
    star=star+"\n"

}
console.log(star);