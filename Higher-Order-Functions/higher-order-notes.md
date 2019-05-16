# Higher order functions:

Function that accept another function as parameters is called a higher order function.

<pre>
function sendMessage(message, fn){
	return fn(message);
}
</pre>

sendMessage("Hello World", console.log);

sendMessage("Hello world", function(message){
console.log(message + "from a callback function");

}
);

var myanofunction = function(message){
console.log(message + "from a callback function"

}\_

sendMessage("Hello wordld", myanofunction);

## Callback Function

Function that is passed as a parameter into higher order function is called Callback function
