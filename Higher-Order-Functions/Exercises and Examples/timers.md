# Timers-setInterval and setTimeout

Both accepts a callback function a and time in milliseconds as paramaeters.

<b>setInterval<b> executes the callback for infinite number of times-intil it is clearred.

<b>setTimeout</b> executes the callback after a set time, once.

When both executes return a unique id called timerId on execution, which can be used to stop the timer or clear the timer.

<pre>
var timerId = setInterval(function(){
console.log("Hi")
},1000);

setTimeout(function(){
	clearTimeout(timerId)
},3000);
</pre>

In the above code after every one sec the hi is consoled, until setimeout executes after 3 secs which will clear it out using the timerId
that was produced while the setInterval got executed.
