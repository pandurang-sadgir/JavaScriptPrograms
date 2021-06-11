/*
Number pattern
11011
11011
00000
11011
11011

*/
let star="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(j==3|i==3){
            star=star+"0";
        }else{
            star=star+"1";
        }
    }
    star=star+"\n";

}
console.log(star);