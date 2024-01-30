/***

Implement a countdown timer that counts down from 81 to 65.

 */
let i=81;

    let finish=setInterval(() => {
        console.log(i)
        i--;
        if(i===64){
            clearInterval(finish)
        }
        
    }, 1000);
   
 



