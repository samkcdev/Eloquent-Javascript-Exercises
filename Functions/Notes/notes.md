Every time a function runs we get access to special kind of keyword called arguments.
It is not an array but array-like-objects.

we can use it to know the length of arguments passed in the function
we can also access the passed arguments through [] notation.

function test(){
arguments.length;
}

test(5,6)

<i>2</i>

function testing(x,y){
if(arguments.length<2)
{console.log("Please pass one more argument")}
else{return x*y}
}

testing(2,2);

here we are checking if the arguments passed is correct or not.

