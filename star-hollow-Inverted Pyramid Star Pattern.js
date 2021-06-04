/*

Star hollow inverted pyramid pattern

 ***************
  *           *
   *         *
    *       *
     *     *
      *   *
       * *
        *

*/
let star="";
for(let i=1;i<=9;i++){//new rows
    for(let k=1; k<=i; k++){
        star=star+" ";
    }
    for(let j=1;j<=17-2*i;j++ ){//for stars
        if (i==1|j==1|j==17-2*i) {
            star= star+ "*";
        } else {
            star = star+" ";
        }

    }
    star=star+"\n";
}
console.log(star);