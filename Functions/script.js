function outer() {
  let a = 10;
  let c = 11;

  function inner() {
    let d = 20;
    console.log("OuterVar " + a);
    console.log("InnerVar " + d);
    a++;
    d++;
    console.log("IncrementedOuter " + a);
    console.log("IncrementedInner " + d);
  }

  return inner;
}

let X = outer();
let Y = outer();

X();
X();
X();

Y();

//this is an example for closure
//the inner() is closure that has access to the outer() functions scope and and can refrence its variables
//and change the outer variables value
//so for the inner function outer function is like global environment where it can alter the outer fucntion variables;

//A Analogy I came up with to understand(though it sounds stupid)
//inner functions is like a king who says to outer function, I will protect your children(variable) becasue your
//children (variable) is my subject, even after you die, but i will change his/her value as I please.
