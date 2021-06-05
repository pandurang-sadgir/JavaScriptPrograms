/*
star-Half Diamond Star Pattern

*
**
***
****
*****
******
*******
******
*****
****
***
**
*

*/
let star="";
//for upward triangle
for(let i=1;i<=7;i++){//for new line
    for(let j=1;j<=i;j++){
        star=star+"*";
    }
    star=star+"\n";

}
   //for downward triangle
for(let i=1;i<=6;i++){//for new line
    for(let j=6;j>=i;j--){
        star=star+"*";
    }
    star = star+"\n";

}
console.log(star);