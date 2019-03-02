//Exercise-3-ChessBoard
let dimension = 8;
let charHash = "";
for (let i = 0; i < dimension; i++) {
  for (let v = 0; v < dimension; v++) {
    if ((i + v) % 2 == 0) {
      charHash += " ";
    } else {
      charHash += "#";
    }
  }
  charHash += "\n";
}

console.log(charHash);
//Couldnt find a solution by myself
//But this is how I understood this solution code from the author
//The first for loop runs, which triggers the for loop within it
//within the inner loop there is a if condition that checks if the sum of counter
// is divisible by 2, if yes it adds a space else adds a hash
//and once this inner loop escapes it adds a new line
//so it goes on till it reaches the termination value ie.dimension value.
