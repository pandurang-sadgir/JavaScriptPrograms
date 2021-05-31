/*
Diamond pattern
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
Divide diamond into two triangle.
*/

let star = "";
let n = 5;

// upward triangle
for(let i=1; i<=5; i++){ // for lines
    for(let k=1; k<=n-i;k++){ //for spaces
        star =star+" ";

    }
    for(j=1; j<=(2*i)-1; j++){ // for printing star
        star = star +"*";
    }
    star=star+"\n"

}
//downward pyramids in Second loop.
for(i=1;i<=4;i++){ //for new line

    for(k=1;k<=i;k++){ // for spaces
        star = star+" ";
    }

    for(j=1;j<=2*(4-i)+1; j++){ //for printing star //for (let k = (n - i) * 2 - 1; k > 0; k--)
        star=star+"*"

    }

    star=star+"\n";

}

console.log(star);