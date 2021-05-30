/*Star pyramid

----*
---***
--*****
-*******
*********

*/

let star = "";
for(let i=1;i<=5; i++){ // for rows

    for(let k=1; k<=5-i; k++ ){  // for spaces
        star = star + " "; // must give space between string;
    }

    for(let j=1; j<=2*i-1; j++){ // for stars
        star = star + "*" ;

    }
     star = star+"\n"; // star="\n" it only overwrite previous not add to its previous value
}
console.log(star);