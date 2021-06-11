/*
Number pattern

11111
11111
11011
11111
11111

*/
let star="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==3 && j==3){
            star=star+"0";
        }else{
            star=star+"1";
        }
    }
    star=star+"\n";
}
console.log(star);