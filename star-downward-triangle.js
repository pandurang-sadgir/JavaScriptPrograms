
/* Downward star pattern

*****
****
***
**
*

*/

let star = "";   // Declare global variable
for(let i=1; i<=5; i++){  //for five rows/lines

    for(j=1; j<=6-i;j++){ // for printing star {j<=5-i+1}
        star=star+"*"
    }
    star= star+"\n";
}
console.log(star);