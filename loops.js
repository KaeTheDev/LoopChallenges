/*  CHALLENGE ONE -> Print odds 1-20: Using a loop write code 
that will console.log all of the odd values from 1 up to 20
*/


function oddNumbers(){
    var sum = 0;
    var arr = []
for(var i= 1; i < 20; i++){
    if(i%2==1) {
    arr.push(i);
    console.log(i);
    }
}

return arr;

}

var z = oddNumbers();
console.log(z);

/*  CHALLENGE TWO -> Decreasing Multiples of 3: Using a loop write code 
that will console.log all of the values that are evenly divisible by 3 
from 100 down to 0.
*/

function divisibleByThree() {
    var arr = [];
    
for(var i = 100; i >= 0; i--) {
    if (i%3==0){
        arr.push(i);
        console.log(i);
        }
    }

    return arr;
}

var z = divisibleByThree();
console.log(z);

/*  CHALLENGE THREE -> Print the sequence: Using a loop write code that 
will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
*/

function Sequence() {
    var x = [];
     for(var i = 4; i >= -3.5; i = i - 1.5) {
         console.log(i);
         x.push(i);
      }
      
      return x;
  }
  
  var z = Sequence();
  console.log(z);
  

/*  CHALLENGE FOUR -> SIGMA: Write code that will add all of the values 
from 1-100 onto some variable sum and at the end console.log the result 
1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
*/


function Sigma() {
    var sum = 0;  
    for(var i = 1; i <= 100; i++)
    {
        sum = sum + i;
        
    } 
        return sum;   
}

var z = Sigma();
console.log(z);

/*  CHALLENGE FIVE -> FACTORIAL: Write code that will multiply all of the
values from 1-12 onto some variable product and at the end console.log the 
result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at 
the end.
*/


function Factorial() {
    var sum = 1;

    for(var i = 1; i <= 12; i++) {
        sum = sum * i;
    }
    return sum;
}

var z = Factorial();
console.log(z);