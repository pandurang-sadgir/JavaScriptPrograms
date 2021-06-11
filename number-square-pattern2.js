/*

Number pattern 1 and 0 at alternative rows.
11111
00000
11111
00000
11111


*/
let star="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
    if (i%2==1) {
        star=star+"1";
    } else {
        star=star+"0";
    }

    }
    star=star+"\n";

}
console.log(star);