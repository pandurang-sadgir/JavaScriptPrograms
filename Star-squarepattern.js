/* Square pattern:-
*****
*****
*****
*****
*****
*/
let star = "";
for(i = 1; i <= 5; i++){ //for no. rows

    for(j = 1; j<=5; j++){ // print no. os star on rows
       star = star + "*"; // store it in star variable and assign new start to it

    }
    star = star+ "\n";

}
console.log(star);
window.alert(star);