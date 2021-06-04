/*
Star-Hollow Pyramid Star Pattern

      *
     * *
    *   *
   *     *
  *       *
 ***********

*/
let star = "";
let n=6;
for(let i=1;i<=n;i++){

    for(let k=1;k<=n-i+1;k++){//for spaces
        star=star+" ";
    }
    for(let j=1; j<=i*2-1;j++){ //for star
        if (i==1|j==1|j==i*2-1|i==n) {
            star = star + "*";
        } else {
            star=star+" ";
        }

    }
    star=star+"\n";

}
console.log(star);