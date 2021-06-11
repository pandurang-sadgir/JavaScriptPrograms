/*
Number pattern

01110
10001
10001
10001
01110

*/

let star="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){//for printing star
        if(i==j|j==5-i+1){
            star=star+"0";

        }else if(i==1|j==5|j==1|i==5){
            star=star+"1";
        }else{
            star=star+"0";

        }
    }
    star=star+"\n";

}
console.log(star);