Overview of 'this' keyword in JS

Different kinds of binding

Default-this will always point to window object.
Implicit-this will take the closest object within which it is declared as its parent.

Explicit- this is explicitly setting the value for 'this' using functions call, bind and apply. This allows us to set the value of this whatever we want it to be.

call(): takes in two parameters thisArg that is what should the this be and n number of other arguments. It invokes the function immedialtely.
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

With call() we are changing the parent of 'this' to whisky the object.

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

animal.introduce();
"Tiger is a wild and says roar!"
var alpha = {
 name:"Alpha",
type:"dog",
sound:"woof"
}

animal.introduce.call(alpha);
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
