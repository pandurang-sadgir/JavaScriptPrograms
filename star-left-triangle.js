/*Left triangle
----*
---**
--***
-****
*****

*/

let star = "";
for(let i = 1; i<=5; i++){ // for new line
    for(let k=1; k<=5-i; k++){ // for printing spaces
        star = star +" ";
    }
    for(let j=1; j<=i; j++){// for printing star
        star = star +"*";
    }
    star = star+"\n"; //new line

}
console.log(star);