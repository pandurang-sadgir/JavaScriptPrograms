/*
Star Mirrored-Right-Triangle pattern
     *
    **
   ***
  ****
 *****
******
 */

let star="";
for(let i=1; i<=6; i++){//for new line
    for(let k=5; k>=i;k--){
        star=star+" "
    }
    for(let j=1;j<=i;j++){//for star printing
        star=star+"*";

    }
    star=star+"\n";
}
console.log(star);