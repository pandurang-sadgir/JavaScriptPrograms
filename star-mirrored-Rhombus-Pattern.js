/*
Star Mirrored Rhombus Pattern

*****
 *****
  *****
   *****
    *****

 */
let star = "";
for(let i=1;i<=5;i++){
    for(let k=2;k<=i;k++){//for spaces
        star=star+" ";
    }
    for(let j=1;j<=5;j++){
        star = star + "*";
    }
    star=star+"\n"

}
console.log(star);