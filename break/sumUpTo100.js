/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum=0;
for(i=1;;i++){
    sum+=i;
    
    if(sum>=100)break;



    console.log(sum)
}

