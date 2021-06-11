/*
Number square pattern
11111
10001
10001
10001
11111

*/
let star="";
for(let i=1;i<=5;i++){//for new lines
    for(let j=1;j<=5;j++){
        if(i==1|j==1|j==5|i==5){
            star=star+"1";

        }else{
            star=star+"0";

        }

    }
    star=star+"\n";

}
console.log(star);