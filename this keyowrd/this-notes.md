Overview of 'this' keyword in JS

Different kinds of binding

Default-this will always point to window object.
Implicit-this will take the closest object within which it is declared as its parent.

Explicit- this is explicitly setting the value for 'this' using functions call, bind and apply. This allows us to set the value of this whatever we want it to be.

call(): takes in two parameters thisArg that is what should the this and n number of other arguments. It invokes the function immedialtely.
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

There is something called new used in constructor function.
