/*
Star cross pattern
*         *
 *       * 
  *     *  
   *   *   
    * *    
     *     
    * *    
   *   *   
  *     *  
 *       * 
*         *

*/
let star="";
for(let i=1;i<=11;i++){//new line
    for(let j=1;j<=11;j++){
        if (i==j|j==11-i+1) {
            star=star+"*";
        } else {
            star=star+" ";
        }
    }
    star=star+"\n";

}
console.log(star);