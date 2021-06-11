/*
Number pattern
12345
23456
34567
45678
56789


*/
let star="";
for(let i=1;i<=5;i++){
    for(let j=i;j<=5+i-1;j++){
        star=star+j;
    }
    star=star+"\n";

}
console.log(star);