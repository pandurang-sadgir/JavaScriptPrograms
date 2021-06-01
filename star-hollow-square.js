/*
Star hollow square
********
*      *
*      *
*      *
*      *
*      *
*      *
********

*/

let star = "";
for(let i=1; i<=8; i++){//for new line
    for(let j=1; j<=8; j++){
        if(i==1|i==8|j==1|j==8){// for printing star
            star = star+"*";
        }else{
            star =star+" ";
        }

    }
    star = star+"\n";
}
console.log(star);