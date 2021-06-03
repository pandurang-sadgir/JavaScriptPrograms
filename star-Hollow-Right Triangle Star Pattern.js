/*
Hollow-Right Triangle Star Pattern

*
**
* *
*  *
*   *
*    *
*     *
********

*/

let star = "";
for(let i=1;i<=8;i++){ //for rows
    for(let j=1;j<=i;j++){
        if(i==1|j==1|j==i|i==8){
            star=star+"*";

        }else{
            star=star+" ";
        }

    }
    star=star+"\n";

}
console.log(star);