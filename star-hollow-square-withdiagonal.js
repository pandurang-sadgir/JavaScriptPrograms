/*
Star hollow square with diagonal pattern

*********
**     **
* *   * *
*  * *  *
*   *   *
*  * *  *
* *   * *
**     **
*********

*/

let star = "";
let n = 9;
for(let i=1; i<=n; i++){// for new line

    for(let j=1;j<=n;j++){//for star printing
        if(i==1|i==n|j==1|j==n|i==j|j==n-i+1){
            star = star+"*"; //for stars

        }else{
            star = star+" " //for spaces
        }

    }
    star =star+"\n"

}
console.log(star);