/*
Star-right arrow pattern
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
let star="";
for(let i=1;i<=5;i++){//for row
    for(let k=1;k<=i;k++){
        star=star+" ";
    }
    for(let j=1;j<=6-i;j++){
        star=star+"*";
    }
    star=star+"\n";
}

//for downward triangle
for(let i=2;i<=5;i++){//for new line
    for(let k=1;k<=6-i;k++){//for spaces
        star=star+" ";
    }
    for(let j=1;j<=i;j++){
        star=star+"*";
    }
    star=star+"\n"
}
console.log(star);