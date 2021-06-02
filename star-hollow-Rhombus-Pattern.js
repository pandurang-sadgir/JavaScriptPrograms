/*
Star-Hollow-Rhombus-pattern
      ******
     *    *
    *    *
   *    *
  *    *
 ******

 */

let star = "" ;
//let n = 6;
function rhombus(n){
    for(let i=1;i<=n; i++){//for rows
        for(let k=1;k<=n-i+1;k++){//for spaces
            star=star+" "
        }
        for(let j=1;j<=n;j++){
            if(i==1|i==n|j==1|j==n){
                star=star+"*";

            }else{
                star=star+" ";

            }


        }
        star =star+"\n";

    }
    console.log(star);
    console.log(typeof(star));

}

rhombus(6);