/*
Number pattern

10001
01010
00100
01010
10001

*/
let star="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if (i==j|j== 5-i+1) {
            star=star+"1"
        } else {
            star=star+"0";
        }
    }
    star=star+"\n";

}
console.log(star);
