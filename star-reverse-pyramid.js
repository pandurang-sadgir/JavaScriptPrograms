/* Reverse pyramids

*********
-*******
--*****
---***
----*


*/
let star = "";
let n =5;
for(let i=1;i<=5;i++){ //for new line
    for(let k=2;k<=i;k++){ // for printing spaces
        star =star +" ";

    }

    for(j=1; j<=2*(n-i)+1; j++){ //for printing star
        star = star + "*";
    }
    star = star + "\n"
}
console.log(star);