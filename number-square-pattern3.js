/*
Number square pattern
print at alternate number 0,1 column
*/
10101
10101
10101
10101
10101


let star="";

for(let i=1;i<=5;i++){//for of lines
    for(let j=1;j<=5;j++){//for printing number
        if (j%2==1) {
            star=star+"0"
        } else {
            star=star+"1";
        }
    }
    star=star+"\n";
}
console.log(star);