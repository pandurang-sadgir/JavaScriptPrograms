/*
Star left arrow pattern

    *****
   ****
  ***
 **
*
 **
  ***
   ****
    *****
*/
let star = "";
for(let i=1;i<=5;i++){
    for(let k=1;k<=5-i;k++){//for new rows
        star=star+" ";
    }
    for(let j=1;j<=6-i;j++){
        star =star +"*";
    }
    star=star+"\n";
}
for(let i=2;i<=5;i++){//for new rows
    for(let k=2;k<=i;k++){//for spaces
        star=star+" ";
    }
    for(let j=1;j<=i;j++){//for star printing
        star=star+"*";

    }
    star=star+"\n";
}

console.log(star);
