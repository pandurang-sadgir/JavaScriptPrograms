/*
Number square pattern1

111111
111111
111111
111111
111111
111111


*/
let star="";
for(let i=1;i<=6;i++){//new rows
    for(let j=1;j<=5;j++){//for printing number
        star = star+"1";
    }
    star=star+"1\n"

}
console.log(star);