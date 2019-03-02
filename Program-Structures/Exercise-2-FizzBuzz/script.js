//Fizz Buzz
//my solution
for (let i = 1; i <= 100; i++) {
  let number;
  number = i;
  if (number % 3 == 0 && number % 5 == 0) {
    console.log((number = "FizzBuzz"));
  } else if (number % 3 == 0) {
    console.log((number = "Fizz"));
  } else if (number % 5 == 0) {
    console.log((number = "Buzz"));
  } else {
    console.log(number);
  }
}
//authors solution
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
