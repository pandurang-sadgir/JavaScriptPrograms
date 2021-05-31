/*
Right pascal triangle

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

let star = "";
let n=5;
//upward triangle
for(i=1;i<=n;i++){ //for new line

    for(j=1;j<=i;j++){//for printing star
        star=star+"*";

    }
    star=star+"\n";

}
//Downward triangle
for(i=1;i<=4;i++){//for new line
    for(let j=4-i+1;j>0;j--){//for printing star
        star= star+"*"

    }
star=star+"\n";
}
console.log(star);