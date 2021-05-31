/*
Hourglass Star pattern
*********
 *******
  *****
   ***
----*
   ***
  *****
 *******
*********

*/
//upward triangle
let star = "";
let n=5;
for(let i=1; i<=n; i++){ // for rows
    for(let k=2;k<=i;k++){// for spaces
        star=star+" ";

    }

    for(let j=1; j<=2*(n-i)+1; j++){// for printing star *
        star =star+"*";
    }
    star = star+"\n";

}
//downward triangle

for(let i=1; i<=4; i++){ // for rows
    for(let k=0;k<4-i;k++){//for spaces
        star=star+" "
    }
    for(let j=1;j<=2*i+1;j++){ //for star
        star =star+"*";

    }
    star=star+"\n"
}
console.log(star);
