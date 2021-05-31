/*

Left pascal star pattern
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
*/
//upward triangle
let star = "";
for(let i=1;i<=5;i++){ //for newline
    for(let k=1;k<=5-i;k++){//for spaces
        star=star+" ";
    }
    for(let j=1; j<=i;j++){
        star= star+"*";
    }
    star=star+"\n"

}
//downward triangle

for(let i=1;i<=4;i++){
    for(let k=1;k<=i;k++){ //for spaces
        star=star+" "
    }
    for(let j=1; j<=5-i; j++){ //for printing star
        star=star+"*";

    }
    star=star+"\n"

}
console.log(star);