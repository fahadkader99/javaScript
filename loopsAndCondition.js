const flag = true;
//we can't change const but we can alter the value

if(!flag){
  console.log("condition satisfied");
}
else{
  console.log(flag);
  console.log("condition not satisfied");
}

console.log("===================");

// while loop - loop will be going as long as the loop condition is true, when false the loop will exit

let i = 0;
while(i < 10){
  i++;
  console.log("while loop " + i);
}
console.log("===================");

// do while > the Do loop with run before it cheks condition, or no matter the condition, DO will run & then it will check for condition

let j = 1;
do{ 
  j++;
}while(j < 10);
console.log("Do while loop " + j);

console.log("===================");


// for loop - use it when we know the number of iteration to execute

for(let i = 0; i<= 10; i++){
  console.log(i +" " + "For loop");
}

console.log("===================");

for(let a =1; a <= 10; a++){
  if(a % 2 == 0 || a % 5 == 0) {
    console.log(a);
  }
}

console.log("===================");

// with a loop find out the number which are multiplication of 2 & 5 and find first 3 digit.
let count = 0;

for(let a = 1; a <= 100; a++){
  if(a%2 ==0 && a%5 ==0){
    count++;
    console.log(a);
    if(count == 3){     
      break;      
    }
  }
}



