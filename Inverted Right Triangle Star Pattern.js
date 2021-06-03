/*
Inverted Right Triangle Star Pattern.

*******
******
*****
****
***
**
*


 */
let star="";
for(let i=1;i<=7;i++){//for new rows
    for(let j=7;j>=i;j--){//for stars
        star = star+"*";
    }
    star = star+"\n"

}
console.log(star);