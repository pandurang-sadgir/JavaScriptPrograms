/* Right Triangle
*
**
***
****
*****

*/

let star = ""; // placeholder
for(let i = 1; i<=5; i++){ // for new line
    for(let j = 1 ; j <= i; j++ ){ // for printing * on line
       star = star + "*"; // storing * one by one
    }
star = star + "\n"; // for newline
}
console.log(star);