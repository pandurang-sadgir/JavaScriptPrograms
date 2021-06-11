/*
Number pattern
12345
678910
1112131415
1617181920
2122232425


*/
let star="";
let k=1;
for(let i=1;i<=5;i++){//for new line
    for(let j=1;j<=5;j++,k++){
        star=star+k;

    }
    star=star+"\n";

}
console.log(star);
