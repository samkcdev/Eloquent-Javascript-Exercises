Overview of 'this' keyword in JS

Different kinds of binding

Default-this will always point to window object.
Implicit-this will take the closest object within which it is declared as its parent.

Explicit- this is explicitly setting the value for 'this' using functions call, bind and apply. This allows us to set the value of this whatever we want it to be. These are methods on the function object.

<h3>call()</h3>:

Takes in two parameters thisArg that is what should the this be and n number of other arguments. It invokes the function immedialtely.

Eg:

<pre>
 var animal = {
	introduce:function(){
		return this.name+" is a "+this.type+" and says " + this.sound + "!";
	}
}

var whisky = {
	name:"Whiskey",
	type:"dog",
	sound:"woof"
}
animal.introduce.call(whisky);
</pre>

With call() we are changing the parent of 'this' to whisky the object or other words we are borrowing the introudce method from animal object and using it with the object whisky.

here's another example of changing 'this' parent to another object

<pre>

var animal = {
name:"Tiger",
type:"wild",
sound:"roar",
introduce:function(){
	return this.name + " is a " + this.type + " and says " + this.sound + "!";
}
}
result:
animal.introduce();
"Tiger is a wild and says roar!"

var alpha = {
 name:"Alpha",
type:"dog",
sound:"woof"
}

animal.introduce.call(alpha);
result:
"Alpha is a dog and says woof!"

</pre>

One of the most common use cases for call is to convert an array-like object into an actual array.

Normally this is what returned from arguments an array like object
and any normal array related methods doesnt work on it and throws up an error

<pre>
function sumArguments(){
	return arguments;
}

sumArguments(5,8,9);

<b>Result:</b>
--------------------------
Arguments(3) [5, 8, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]
</pre>

Here we can use the slice method along with call() to convert array like objects to normal array.

<pre>
function sumArgumentsCall(){
	return [].slice.call(arguments);
}

sumArgumentsCall(4,5,6);

<b>Result:</b>
--------------------------
[4, 5, 6]
</pre>

<h3>apply()</h3>:
Apply also does the same functionality as call, difference is it takes the second argument as array of parameters

syntax:fn.apply(thisArg,[arg1,arg2,arg3])

One way of using apply and call method is to borrow method from one object to be used by another obj.
var person = {
firstName: "Sam",
secondName: "Cherian",
getFullName: function() {
return this.firstName + " " + this.secondName;
}
};

var secondPerson = {
firstName: "Jane",
secondName: "Doe"
};

console.log(person.getFullName());
console.log(person.getFullName.call(secondPerson));

<h3>bind()</h3>:

Bind is also used to change the context of this but function doesnt get invoked as soon as its applied instead returns the copy of the function on which it was applied.

one instance of using bind, Function Currying

<pre>
function multiply(a,b){
	return a*b;
}

var muliplyByTwo = multiply.bind(this,2);
muliplyByTwo(4);
muliplyByTwo(5);
muliplyByTwo(3);
muliplyByTwo(2);


</pre>

In the above example we giving a permanent paramater of two to the function using bind, this is called function currying where we give a preset parameter to the function.
