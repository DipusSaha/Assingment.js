// Create a JavaScript function called "multiplicationTable" that takes a single argument "num" (an integer) as input.

// Inside the loop, multiply the current iteration number by the input "num" to generate the product.

// Log the product to the console in the format "num x iteration = product".

function multiplicationTable(num){
  for(let i=1;i<=10;i++){
    const product = num*i;
    console.log(num+"*"+i +"="+product);
  }
}
// multiplicationTable(3);
multiplicationTable(5);
// multiplicationTable(9);
