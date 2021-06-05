/*
Star-Diamond pattern

 6    *
 5   ***
 4  *****
 3 *******
 4  *****
 5   ***
 6    *
*/
let space="";
let spaces=6;
let stars=1;
for(let i=1;i<=7;i++){ //for newline
  for(let j=1;j<=spaces;j++){//for spaces
    space = space+" ";
  }
  for(let k=1;k<=stars;k++){//for stars
    space=space+"*";
  }
  if(spaces>i){//3>4 condition false
    spaces=spaces-1;
    stars=stars+2;
  }
  if(spaces<i){//3<4 condition true
    spaces=spaces+1;
    stars=stars-2;
  }
  space=space+"\n";
}
console.log(space);