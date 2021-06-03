/*
Hollow inverted right triangle star pattern
*********
*      *
*     *
*    *
*   *
*  *
* *
**
*

 */
let star = "";
for(let i=1;i<=9;i++){ //for rows;
    for(let j=1;j<=9;j++){//for stars
        if(i==1|j==1|j==(9-i)+1){

            star=star+"*";

        }else{
            star=star+" ";

        }

    }
    star=star+"\n"
}
console.log(star);