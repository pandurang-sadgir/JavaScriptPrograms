/*
Right Triangle Star Pattern.
*
**
***
****
 */
let star = "";
for(let i=1; i<=9; i++){//for new line
    for(let j=1;j<=i; j++){
        star=star+"*";

    }
    star=star +"\n";

}
console.log(star);